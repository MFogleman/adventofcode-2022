# Setting up a work environment

# Download our tools
## Visual Studio Code (aka VS Code)
### About 
Not to be confused with "Visual Studio", which is a far more powerful IDE (Integrated Development Environment) than what we need. VS Code is a relatively lightweight but powerful text editor that will help make our coding a lot simpler

### Install
Download and install it from [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Plugins
VS Code supports Extensions, which are like little plugins or mods for VS Code.  Go ahead and install `Quokka.js`.  They do have a pro mode you can pay money for, but for now the default "community" mode, which is free, will be more than powerful enough  

## Github (not to be confused with Git)
### About
Github will be used to host our project so others can see it, clone it, and keeps it safely stored somewhere in the event your computer with your work on it explodes.  
### Sign up
Sign up for an account [at github.com](https://github.com/signup)

## Git
### About
`git` is a Source Control Management tool. Did you ever write an essay and want to make changes but weren't sure if you wanted to commit to the new stuff? Then you ended up with files called `paper.doc`, `paper1.doc` `paper_final.doc` `paper_final_2.doc`?  
`git` lets us edit files in our project, and save them as `commit`s.  Then if we want to go back and change or undo something from several revisions ago, we can go to previous `commit`s.  
Git is an incredibly powerful tool, but youll only ever use about 5 commands in it
### Download
Go to the [official download page](https://git-scm.com/download/win) and choose the appropriate installer. (Probably 64 bit windows)

## Node
### About
Your web browser reads HTML and CSS files to display text/links/images and make them look pretty.  It uses javascript for pretty much everything else.  Node is javascript without the browser. It will let us run javascript code on our local machine's command line, printing outputs to a terminal
### Download
Head to the [Nodejs page](https://nodejs.org/en/) to download it.  Pick the `LTS` (Long Term Support) version.

# Start our project
I have a folder setup that contains all of my projects at `C:\Users\marc\Develop`.  In there, I create a new folder for each project. This one is `adventofcode-2022`

After creating your work folder, open VS Code, click `File` and then `Open Folder`, pick your folder.  

Now click `File` and `New File`, and create a new file named `example.js`

In that file, copy and paste the following

```javascript
const num = 4

const double = num * 2;
console.log(double)
```
Save your file.  You can then open the Command Pallete with `ctrl+shift+P` and choose `Quokka: Start on Current File`

If Node and Quokka are installed correctly, you should see an `8` show up at the end of line 4.

You can also open your Terminal with `ctrl+j`.  From there type `node example.js` which tells node to run the example.js file.  It should look something like this afterwards

> C:\Users\marcf\Develop\adventofcode-2022>node example.js   
> 8

## Committing code
Lets go back to github.com and click "create a new repository". Give it the same name as your project folder (This isnt strictly required but it makes things much less confusing and theres no reason not to do it).  When you create your repo, it should give you instructions on how to add your code to github repo.

