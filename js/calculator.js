// Calculator functionality
function calculatePrice() {
    // Prices
    const prices = {
        floor: 1200,
        wall: 1400,
        preparation: 300
    };

    // Coefficients
    const coefficients = {
        ceramic: 1.0,
        porcelain: 1.3,
        mosaic: 1.7,
        clinker: 1.4,
        stone: 1.8
    };

    // Get values from form
    const surfaceType = document.getElementById('surfaceType').value;
    const area = parseFloat(document.getElementById('area').value) || 0;
    const tileType = document.getElementById('tileType').value;
    const needsPreparation = document.getElementById('preparation').checked;

    // Calculate base price
    let basePrice = prices[surfaceType];
    let coefficient = coefficients[tileType];
    
    // Calculate total
    let total = basePrice * coefficient * area;
    
    // Add preparation cost if needed
    if (needsPreparation) {
        total += prices.preparation * area;
    }

    // Display result
    const resultElement = document.getElementById('price');
    resultElement.textContent = Math.round(total).toLocaleString('ru-RU');
    
    // Show result
    document.getElementById('result').style.display = 'block';
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    // Set initial calculation
    calculatePrice();
    
    // Add event listeners for real-time calculation
    const inputs = ['surfaceType', 'area', 'tileType', 'preparation'];
    inputs.forEach(inputId => {
        document.getElementById(inputId).addEventListener('change', calculatePrice);
    });
    
    // For number input, also listen to input event for real-time update
    document.getElementById('area').addEventListener('input', calculatePrice);
});