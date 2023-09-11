import os
import json
import requests
import subprocess

def download_tgz(url, folder='tgz'):
    response = requests.get(url)
    filename = url.split('/')[-1].split('@')[0] + '.tgz'
    fullpath = os.path.join(folder, filename)
    with open(fullpath, 'wb') as f:
        f.write(response.content)
    return fullpath

if not os.path.exists('tgz'):
    os.makedirs('tgz')

with open('package.json', 'r') as f:
    data = json.load(f)
    deps = data.get('dependencies', {})

    for package, url in deps.items():
        if package.startswith("@robinl"):
            local_tgz_path = download_tgz(url)

            # Uninstall remote and install local
            subprocess.run(['npm', 'uninstall', package])
            subprocess.run(['npm', 'install', f"file:{local_tgz_path}"])
