#!/usr/bin/env python3
"""Contrôle statique SEO/GEO/a11y des pages index.html du site anti-agence-web.fr.

Usage : python3 -I .claude/skills/preflight/scripts/check_site.py [racine]
Sortie : une ligne par problème, puis un résumé. Code retour 1 si erreur bloquante.
Aucune dépendance externe (stdlib uniquement).
"""
import html
import json
import os
import re
import sys

DOMAIN = "https://anti-agence-web.fr"
IGNORED_DIRS = {".git", ".claude", "legacy", "src", "public", "node_modules", "wp-content", "wp-includes", "category", ".vercel", ".netlify"}
FORBIDDEN_WORDS = ["Vannes", "—"]  # ville d'un ancien clone, tiret long
TITLE_MAX, DESC_MIN, DESC_MAX = 60, 120, 160


def pages(root):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in IGNORED_DIRS]
        if "index.html" in filenames:
            yield os.path.join(dirpath, "index.html")


def url_of(root, path):
    rel = os.path.relpath(os.path.dirname(path), root)
    return "/" if rel == "." else f"/{rel}/"


def check(root, path, errors, warnings):
    src = open(path, encoding="utf-8").read()
    url = url_of(root, path)
    err = lambda m: errors.append(f"[ERREUR] {url} : {m}")
    warn = lambda m: warnings.append(f"[ALERTE] {url} : {m}")

    if not re.search(r'<html[^>]*\blang="fr', src):
        err('<html lang="fr"> manquant')

    titles = re.findall(r"(?is)<title>(.*?)</title>", src)
    if len(titles) != 1:
        err(f"{len(titles)} balise(s) <title>")
    elif len(html.unescape(titles[0]).strip()) > TITLE_MAX:
        warn(f"title trop long ({len(html.unescape(titles[0]).strip())} car.)")

    desc = re.findall(r'<meta\s+name="description"\s+content="([^"]*)"', src)
    if not desc:
        err("meta description manquante")
    elif not DESC_MIN <= len(html.unescape(desc[0])) <= DESC_MAX:
        warn(f"meta description {len(html.unescape(desc[0]))} car. (cible {DESC_MIN}-{DESC_MAX})")

    canon = re.findall(r'<link\s+rel="canonical"\s+href="([^"]*)"', src)
    if not canon:
        err("canonical manquant")
    elif canon[0] != DOMAIN + url:
        err(f"canonical {canon[0]!r} au lieu de {DOMAIN + url!r} (doit être absolu)")

    if "user-scalable=0" in src or "maximum-scale=1" in src:
        err("viewport bloque le zoom (accessibilité)")

    body = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", "", src)
    h1 = re.findall(r"(?is)<h1[\s>]", body)
    if len(h1) != 1:
        err(f"{len(h1)} H1 (attendu : 1)")

    for img in re.findall(r"(?is)<img\b[^>]*>", body):
        if not re.search(r'\balt(=|\s|/?>)', img):
            err(f"image sans alt : {img[:80]}")
        if not (re.search(r"\bwidth=", img) and re.search(r"\bheight=", img)):
            warn(f"image sans width/height (CLS) : {img[:80]}")

    for block in re.findall(r'(?is)<script type="application/ld\+json"[^>]*>(.*?)</script>', src):
        try:
            json.loads(block)
        except json.JSONDecodeError as e:
            err(f"JSON-LD invalide : {e}")

    if not re.search(r'<meta\s+property="og:image"', src):
        warn("og:image manquant")

    for href in sorted(set(re.findall(r'href="(/[^"#?]*)', body))):
        if href.startswith(("/wp-", "//")):
            err(f"lien vers un reste WordPress : {href}")
            continue
        target = os.path.join(root, href.lstrip("/"))
        if not (os.path.exists(target) or os.path.exists(os.path.join(target, "index.html"))):
            err(f"lien interne cassé : {href}")

    for src_ref in re.findall(r'(?:src|href)="(/[^"#?]+\.(?:css|js|webp|avif|png|jpe?g|svg|woff2?))"', src):
        if not os.path.exists(os.path.join(root, src_ref.lstrip("/"))):
            err(f"ressource introuvable : {src_ref}")

    visible = html.unescape(re.sub(r"<[^>]+>", " ", body))
    for word in FORBIDDEN_WORDS:
        if word in visible:
            warn(f"texte interdit présent : {word!r}")
    if "A CONFIRMER" in src:
        err("marqueur A CONFIRMER encore présent")


def main():
    root = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else ".")
    errors, warnings = [], []
    found = sorted(pages(root))
    for p in found:
        check(root, p, errors, warnings)
    for line in errors + warnings:
        print(line)
    print(f"\n{len(found)} page(s), {len(errors)} erreur(s), {len(warnings)} alerte(s)")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
