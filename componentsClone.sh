mkdir -p src/npms

cd src/npms

git clone https://github.com/ayushpandey05/core-components.git
cd core-components
# git config credential.helper store
git checkout dev
cd ..

git clone https://github.com/ayushpandey05/colors.git
cd colors
# git config credential.helper store
git checkout dev
cd ..

git clone https://github.com/ayushpandey05/icons.git
cd icons
# git config credential.helper store
git checkout dev
cd ..

git clone https://github.com/ayushpandey05/checkbox.git
cd checkbox
# git config credential.helper store
git checkout dev
cd ..

git clone https://github.com/ayushpandey05/button.git
cd button
# git config credential.helper store
git checkout dev
cd ..

git clone https://github.com/ayushpandey05/form.git
cd form
# git config credential.helper store
git checkout  dev
cd ..

git clone https://github.com/ayushpandey05/text-input.git
cd text-input
# git config credential.helper store
git checkout  dev
cd ..




cd ../../