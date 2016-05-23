'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
import * as child_process from 'child_process'

export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "unity-runner" is now active!');
     
    let disposable = vscode.commands.registerCommand('extension.runUnity', () => {
        let command = '\'var app = Application("Unity"); app.activate(); delay(0.15); sys = Application("System Events"); sys.keystroke("p", { using: "command down"});\''
        child_process.exec('osascript -l JavaScript -e ' + command);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}