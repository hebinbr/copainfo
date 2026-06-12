import re

with open(r"d:\ds\copa\index2.html", "r", encoding="utf-8") as f:
    html = f.read()

# Achar a tag <script type="module"> de emoji settings e o do cloudflare
pos_emoji = html.find('wpEmojiSettingsSupports')
if pos_emoji != -1:
    # Achar o <script antes
    tag_start = html.rfind('<script', 0, pos_emoji)
    tag_end = html.find('</script>', pos_emoji) + len('</script>')
    script_block = html[tag_start:tag_end]
    print("Bloco Emoji encontrado:")
    print(script_block[:100] + " ... " + script_block[-50:])
    
    # Testar regex nele
    pattern = re.compile(r"<script[^>]*>(.*?)</script>", re.DOTALL)
    m = pattern.match(script_block)
    print(f"Regex match: {m is not None}")
