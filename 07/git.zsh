git clone <git repo link>
cd <name of directory>

# workflow for making changes solo
# make changes
git add .
git commit -m "a message describing changes"
git push

git checkout main
git pull
git checkout -b new-branch
# make changes in code
git add .
git commit -m "a message describing changes"
git push -u origin new-branch
# when you are done create a pull request in github and merge over to main

git status
