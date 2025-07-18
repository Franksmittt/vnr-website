import os

# Paths
app_folder = r"C:\Users\shop\Desktop\zzvnr\app"
output_file = r"C:\Users\shop\Desktop\zzvnr\combined_app_js_files.txt"

# Open output file
with open(output_file, 'w', encoding='utf-8') as outfile:
    for root, dirs, files in os.walk(app_folder):
        for filename in files:
            if filename.endswith('.js') or filename.endswith('.jsx'):
                file_path = os.path.join(root, filename)
                rel_path = os.path.relpath(file_path, app_folder)

                # Write file path as a section header
                outfile.write(f"\n\n// === {rel_path} ===\n\n")

                # Write file content
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as jsfile:
                    content = jsfile.read()
                    outfile.write(content)

print(f"✅ All .js and .jsx files combined into: {output_file}")
