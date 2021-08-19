mkdir -p src/npms

cd src/npms

git clone https://github.com/ayushpandey05/core-components.git
cd core-components
# git config credential.helper store
git checkout -b dev
cd ..

git clone https://github.com/ayushpandey05/colors.git
cd colors
# git config credential.helper store
git checkout -b dev
cd ..

git clone https://github.com/ayushpandey05/icons.git
cd icons
# git config credential.helper store
git checkout -b dev
cd ..

cd ../../