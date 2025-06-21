let expenseForm = document.getElementById('expense-form');
let expenseList = document.getElementById('expense-list');
let totalAmount = document.getElementById('total-amount');

let total = 0;

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (title && !isNaN(amount)) {
        let li = document.createElement('li');
        li.innerHTML = `
            <span>${title} - ₹${amount.toFixed(2)}</span>
            <button onclick="deleteExpense(this, ${amount})">X</button>
        `;
        expenseList.appendChild(li);

        total += amount;
        totalAmount.textContent = total.toFixed(2);

        expenseForm.reset();
    }
});

function deleteExpense(btn, amount) {
    btn.parentElement.remove();
    total -= amount;
    totalAmount.textContent = total.toFixed(2);
}
// Pull request 