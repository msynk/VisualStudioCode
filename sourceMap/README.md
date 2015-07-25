# VisualStudioCode
Experiences with VS Code.


1. install last version of tsc (at least versio 1.5 for tsconfig.json support):

    C:\\> npm i tsc -g
   
2. add a tsconfig.json file to the root folder of the project.

3. add following content to tsconfig.json:

    	{
		"compilerOptions": {
			"target": "ES5",
			 "sourceMap": true
	   	}
    	}

4. configure vs code task by pressing `ctrl+shift+B`

5. use the second example form this file with the following json:

    // A task runner that calls the Typescipt compiler (tsc) and 
    // compiles based on a tsconfig.json file that is present in
    // the root of the folder open in VSCode
    
    {
    	"version": "0.1.0",
    	
    	// The command is tsc. Assumes that tsc has been installed using npm install -g typescript
    	"command": "tsc.cmd",  // !!! this is important !!!
    	
    	// The command is a shell script
    	"isShellCommand": true,
    
    	// Show the output window only if unrecognized errors occur. 
    	"showOutput": "silent",
    	
    	// Tell the tsc compiler to use the tsconfig.json from the open folder.
    	"args": ["-p", "."],
    	
    	// use the standard tsc problem matcher to find compile problems
    	// in the output.
    	"problemMatcher": "$tsc"
    }
    
6. make sure the command property is being set to "tsc.cmd", the `.cmd` extension is required to force it to use the node version of tsc (to use the latest version).

7. add an `index.ts` to the project:

    var mapped = [1, 2, 3, 4, 5].map(n=> n / 5);
    mapped.forEach(console.log.bind(console));
    
8. after save, press `ctrl+shift+B` again to run the task.

9. it should add an `index.js` and an `index.js.map` file to the current folder.
