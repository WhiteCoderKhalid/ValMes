 // Encode message safely (supports emojis)
 function encodeMessage(message) {
    return encodeURIComponent(message);
}

// Decode message safely
function decodeMessage(encodedMessage) {
    return decodeURIComponent(encodedMessage);
}

function generateLink() {
    const message = document.getElementById("messageInput").value.trim();
    if (!message) {
        alert("Please write a message first!");
        return;
    }
    const encodedMessage = encodeMessage(message);
    const link = `${window.location.origin}${window.location.pathname}?msg=${encodedMessage}`;
    document.getElementById("generatedLink").value = link;
    document.getElementById("linkContainer").style.display = "block";
}

async function copyLink() {
    try {
        await navigator.clipboard.writeText(document.getElementById("generatedLink").value);
        alert("Link copied to clipboard!");
    } catch (err) {
        alert("Failed to copy link. Please copy manually.");
    }
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const message = params.get("msg");
    if (message) {
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("messageContainer").style.display = "block";
        document.getElementById("messageContainer").innerText = decodeMessage(message);
    }
}