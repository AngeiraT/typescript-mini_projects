## Beginner-friendly TypeScript project:
![Screenshot from 2023-06-06 22-35-04](https://github.com/AngeiraT/typescript-mini_projects/assets/105127608/c8372ebb-11ce-4fe2-9f33-671531ccf962)

## Project: Todo List

**Step 1: Set Up Your Development Environment**
- Follow the same steps as mentioned in the previous project to set up your development environment.

**Step 2: Create a New Project**
- Create a new directory for your project.
- Open a terminal or command prompt and navigate to the project directory.
- Run the following command to initialize a new Node.js project and create a package.json file:
```
npm init -y
```

**Step 3: Install Dependencies**
- Install the necessary dependencies for this project. In this case, we'll use `readline-sync` to handle user input in the terminal. Run the following command:
```
npm install readline-sync
```

**Step 4: Create TypeScript Files**
- Create two new files in your project directory: `index.ts` and `Todo.ts`.
- Open these files in your text editor or IDE.

**Step 5: Write Some TypeScript Code**
- In `Todo.ts`, define a `Todo` class with properties for the task description and completion status:


- In `index.ts`, write the main logic for managing the todo list:


**Step 6: Compile and Run the TypeScript Code**
- In the terminal, navigate to your project directory.
- Run the following command to compile the TypeScript code:
```
tsc index.ts
```
This will create a compiled JavaScript file named `index.js` in the same directory.

- Finally, run the JavaScript code using the following command:
```
node index.js
```

You should now have a simple todo list application in your terminal. You can add new todos, mark them as complete, and list all the todos in your list. Feel free to enhance the project by adding more features or improving the user interface. Happy coding!