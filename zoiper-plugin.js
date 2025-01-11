document.getElementById("zoiper-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const host = document.getElementById("host").value;
  const proxy = document.getElementById("proxy").value;
  const transport = document.getElementById("transport").value;

  // Generate QR code URL
  const baseUrl = "https://oem.zoiper.com/qr.php?provider_id=707e2a65c6e1940df6af87424d1ce910";
  const qrUrl = `${baseUrl}&u=${encodeURIComponent(username)}&p=${encodeURIComponent(password)}&h=${encodeURIComponent(host)}&o=${encodeURIComponent(proxy)}&tr=${transport}`;

  // Update QR code image
  const qrImage = document.getElementById("qr-image");
  qrImage.src = qrUrl;
});

