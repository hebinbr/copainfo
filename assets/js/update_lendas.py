import re

with open('d:/ds/copa/copa/copainfo/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the legends container
match = re.search(r'(<div class="legends-container">\s*<!-- Linha Central -->\s*<div class="legends-line"></div>\s*)(.*?)(    </div>\s*</div>\s*<!-- Sexta Seção)', content, re.DOTALL)
if not match:
    print('Container not found!')
    exit()

prefix = match.group(1)
items_str = match.group(2)
suffix = match.group(3)

# Each item starts with <!-- X. Name --> or <div class="legend-item">
items = re.split(r'(?=<!-- \d+\. .*? -->\s*<div class="legend-item">)', items_str)
items = [i for i in items if i.strip()]

def get_year(item):
    m = re.search(r'<p class="legend-era">[^\d]*(\d{4})', item)
    if m: return int(m.group(1))
    return 9999

items.sort(key=get_year)

# Re-number them
for idx, item in enumerate(items):
    # update comment if exists
    item = re.sub(r'<!-- \d+\. (.*?) -->', r'<!-- ' + str(idx+1) + r'. \1 -->', item)
    # update badge
    item = re.sub(r'<div class="legend-badge">\d+</div>', f'<div class="legend-badge">{idx+1}</div>', item)
    items[idx] = item

new_items_str = ''.join(items)
new_content = content[:match.start(2)] + new_items_str + content[match.end(2):]

with open('d:/ds/copa/copa/copainfo/index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Updated index.html Lendas section successfully.')
