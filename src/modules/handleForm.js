import createPassword from './generators';

const generatedPasswordEl = document.querySelector('.generated-password');

const passwordLengthEl = document.querySelector('.password-length');
const upperCaseCheckEl = document.querySelector('.upperChar-check');
const lowerCaseCheckEl = document.querySelector('.lowerChar-check');
const numCheckEl = document.querySelector('.num-check');
const symbolsCheckEl = document.querySelector('.symbols-check');

const generatePasswordBtn = document.querySelector('.generate-password');

export default () => {
    generatePasswordBtn.addEventListener('click', () => {
        try {
            const password = createPassword(
                passwordLengthEl.value,
                upperCaseCheckEl.checked,
                lowerCaseCheckEl.checked,
                numCheckEl.checked,
                symbolsCheckEl.checked
            );
    
            generatedPasswordEl.innerText = password;
        } catch (err) {
            console.error('Error generating password:', err.message);
        }
    });
}