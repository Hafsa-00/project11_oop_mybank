#! /usr/bin/env node
import inquirer from 'inquirer'

import { Customer,Customerinfo,BankAccount } from './costumerClass.js';
import BankAccountImpl from './BankAccountClass.js';

const main = async () => {
    const customer = new Customer('John', 'Doe', 'Male', 30, '1234567890');
    const account = new BankAccountImpl(customer);

    const promptUser = async () => {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Credit', 'Debit', 'Check Balance','Exit']
            },
            {
                type: 'input',
                name: 'amount',
                message: 'Enter amount:',
                when: (answers) => answers.action !== 'Check Balance' && answers.action !== 'Exit',
                validate: (value) => !isNaN(parseFloat(value)) || 'Please enter a valid number'
            }
        ]);

        const amount = parseFloat(answers.amount);

        switch (answers.action) {
            case 'Credit':
                account.credit(amount);
                console.log(`Credited ${amount}. Current balance: ${account.getBalance()}`);
                break;
            case 'Debit':
                account.debit(amount);
                console.log(`Debited ${amount}. Current balance: ${account.getBalance()}`);
                break;
            case 'Check Balance':
                console.log(`Current balance: ${account.getBalance()}`);
                break;
            case 'Exit':
                console.log('Goodbye!');
                return;
        }

        await promptUser();
    };

    await promptUser();
};

main().catch((error) => console.error(error));


