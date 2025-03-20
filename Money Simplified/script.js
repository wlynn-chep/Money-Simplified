// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling Effect
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form Validation (Prevents empty submissions)
document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
            alert(`Please fill in the ${input.getAttribute('name')}`);
        }
    });

    if (!valid) {
        e.preventDefault();
    }
});

// Savings Calculator
document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers');
        return;
    }

    // Compound interest formula: A = P(1 + r/n)^(nt)
    const interestRate = rate / 100;
    const finalAmount = amount * Math.pow((1 + interestRate), years);

    document.getElementById('result').textContent = `Your savings after ${years} years will be: KES ${finalAmount.toFixed(2)}`;
});
