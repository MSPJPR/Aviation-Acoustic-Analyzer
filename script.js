// Doppler Effect Simulation
const speedInput = document.getElementById("speed");
const frequencyInput = document.getElementById("frequency");
const speedValue = document.getElementById("speedValue");
const frequencyValue = document.getElementById("frequencyValue");
const canvas = document.getElementById("dopplerCanvas");
const ctx = canvas.getContext("2d");

speedInput.addEventListener("input", updateSimulation);
frequencyInput.addEventListener("input", updateSimulation);

function updateSimulation() {
    const speed = parseInt(speedInput.value, 10);
    const frequency = parseInt(frequencyInput.value, 10);

    speedValue.textContent = speed;
    frequencyValue.textContent = frequency;

    drawDopplerEffect(speed, frequency);
}

function drawDopplerEffect(speed, frequency) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const waveCount = 10;

    for (let i = 0; i < waveCount; i++) {
        const radius = i * 20 + (speed % 20);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(0, 94, 184, ${(1 - i / waveCount).toFixed(2)})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
    ctx.fill();
}

// Aircraft Noise Analysis
const simulateNoiseButton = document.getElementById("simulateNoise");

simulateNoiseButton.addEventListener("click", simulateNoise);

function simulateNoise() {
    const noiseLevels = [
        { engine: "Propeller", noise: Math.random() * 70 + 50 },
        { engine: "Piston", noise: Math.random() * 80 + 60 },
        { engine: "Turbo", noise: Math.random() * 90 + 70 },
        { engine: "Fan", noise: Math.random() * 100 + 80 },
        { engine: "Exhaust Jet", noise: Math.random() * 110 + 90 },
    ];

    let result = "Aircraft Noise Levels (in dB):\n";
    noiseLevels.forEach((entry) => {
        result += `${entry.engine}: ${entry.noise.toFixed(2)} dB\n`;
    });

    alert(result);
}

// Initial Simulation Setup
updateSimulation();
