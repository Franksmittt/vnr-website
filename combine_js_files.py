import os

# Define paths
components_folder = r"C:\Users\shop\Desktop\zzvnr\components"
output_file = r"C:\Users\shop\Desktop\zzvnr\combined_js_files.txt"

with open(output_file, 'w', encoding='utf-8') as outfile:
    for root, dirs, files in os.walk(components_folder):
        for filename in files:
            if filename.endswith('.js'):
                file_path = os.path.join(root, filename)
                rel_path = os.path.relpath(file_path, components_folder)

                outfile.write(f"\n\n// === {rel_path} ===\n\n")
                
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as jsfile:
                    content = jsfile.read()
                    outfile.write(content)

print(f"✅ All .js files combined into: {output_file}")
