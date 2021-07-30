/*
    For this section of the assessment you will be putting together a cheat sheet 
    for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
//CODE HERE
let gitDefinition = 'Git is a version control system that allows individuals and teams to make changes to files'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub is a web-based version control system'
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information 
    about different git 
    commands.  Each object should contain 'description' and 'code' properties.  
    The 'description' property 
    will be a string with a description of what that git command does.  
    The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'Initializes a local repository',
    code: 'git init',
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: `Copies repository from github and puts it on the local machine`,
    code: 'git clone REPO_URL',
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: `Tells user about the state of the working directory and staging area`,
    code: `git status`,
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: `Adds files to be tracked`,
    code: `git add`,
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: `Creates a snapshot of files`,
    code: `git commit -m ""`
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: `Puts local commits onto github`,
    code: `git push REPO_NAME`
}