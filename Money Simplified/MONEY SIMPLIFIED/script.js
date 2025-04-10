// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Apply saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    body.classList.add(savedTheme);

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            if (body.classList.contains("light-mode")) {
                body.classList.replace("light-mode", "dark-mode");
                localStorage.setItem("theme", "dark-mode");
            } else {
                body.classList.replace("dark-mode", "light-mode");
                localStorage.setItem("theme", "light-mode");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const budgetForm = document.getElementById("budget-form");
    const incomeInput = document.getElementById("income");
    const expenseInput = document.getElementById("expense");
    const resultSection = document.getElementById("result");
    const statusElement = document.getElementById("status");
    const remainingElement = document.getElementById("remaining");
  
    // Event listener to calculate budget
    budgetForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const income = parseFloat(incomeInput.value);
      const expense = parseFloat(expenseInput.value);
  
      if (isNaN(income) || isNaN(expense)) {
        alert("Please enter valid numbers for income and expenses.");
        return;
      }
  
      const remaining = income - expense;
  
      // Display result
      if (remaining >= 0) {
        statusElement.textContent = "You're within your budget!";
        remainingElement.textContent = `Remaining Budget: KES ${remaining.toFixed(2)}`;
        resultSection.style.backgroundColor = "#e6ffed"; // Light green
      } else {
        statusElement.textContent = "You're over your budget!";
        remainingElement.textContent = `Over Budget by: KES ${Math.abs(remaining).toFixed(2)}`;
        resultSection.style.backgroundColor = "#fff5f5"; // Light red
      }
  
      resultSection.style.display = "block"; // Show result section
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const budgetForm = document.getElementById("budget-form");
    const addExpenseBtn = document.getElementById("add-expense");
  
    const incomeInput = document.getElementById("income");
    const categoryInput = document.getElementById("expense-category");
    const amountInput = document.getElementById("expense-amount");
  
    const expensesList = document.getElementById("expenses-list");
    const statusEl = document.getElementById("status");
    const remainingEl = document.getElementById("remaining");
    const resultSection = document.getElementById("result");
  
    let expenses = [];
  
    // Add expense to list
    addExpenseBtn.addEventListener("click", () => {
      const category = categoryInput.value;
      const amount = parseFloat(amountInput.value);
  
      if (!category || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid category and amount.");
        return;
      }
  
      expenses.push({ category, amount });
      updateExpenseList();
  
      // Reset fields
      categoryInput.value = "";
      amountInput.value = "";
    });
  
    // Display the expense items grouped by category
    function updateExpenseList() {
      expensesList.innerHTML = "";
  
      const grouped = expenses.reduce((acc, { category, amount }) => {
        acc[category] = (acc[category] || 0) + amount;
        return acc;
      }, {});
  
      for (let category in grouped) {
        const li = document.createElement("li");
        li.textContent = `${category}: KES ${grouped[category].toFixed(2)}`;
        expensesList.appendChild(li);
      }
    }
  
    // Handle budget calculation
    budgetForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const income = parseFloat(incomeInput.value);
      if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income.");
        return;
      }
  
      const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
      const balance = income - totalExpenses;
  
      if (balance >= 0) {
        statusEl.textContent = "You're within your budget!";
        remainingEl.textContent = `Remaining: KES ${balance.toFixed(2)}`;
        resultSection.style.backgroundColor = "#e6ffed";
      } else {
        statusEl.textContent = "You're over budget!";
        remainingEl.textContent = `Over by: KES ${Math.abs(balance).toFixed(2)}`;
        resultSection.style.backgroundColor = "#fff5f5";
      }
  
      resultSection.style.display = "block";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const goalForm = document.getElementById("goal-form");
    const savingForm = document.getElementById("saving-form");
  
    const savingGoalInput = document.getElementById("saving-goal");
    const savingAmountInput = document.getElementById("saving-amount");
    const progressBar = document.getElementById("progress-bar");
    const savingsStatus = document.getElementById("savings-status");
  
    let goal = 0;
    let totalSaved = 0;
  
    goalForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      goal = parseFloat(savingGoalInput.value);
      totalSaved = 0;
      updateProgress();
      savingGoalInput.value = "";
    });
  
    savingForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const saving = parseFloat(savingAmountInput.value);
      if (isNaN(goal) || goal <= 0) {
        alert("Please set a saving goal first.");
        return;
      }
      totalSaved += saving;
      updateProgress();
      savingAmountInput.value = "";
    });
  
    function updateProgress() {
      const percentage = Math.min((totalSaved / goal) * 100, 100).toFixed(1);
      progressBar.style.width = `${percentage}%`;
      progressBar.textContent = `${percentage}%`;
  
      const remaining = Math.max(goal - totalSaved, 0).toFixed(2);
      savingsStatus.textContent = `Total Saved: KES ${totalSaved.toFixed(2)} | Remaining: KES ${remaining}`;
    }
  });
  
  