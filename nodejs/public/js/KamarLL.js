document.getElementById("kontrak-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const Telephone = document.getElementById("Telephone").value;
    const Alamat_Kontrakan = document.getElementById("Alamat_Kontrakan").value;
    const Tipe = document.getElementById("Tipe").value;
    const Biaya = document.getElementById("Biaya").value;
    const tanggal_mulai = document.getElementById("tanggal_mulai").value;
    const tanggal_akhir = document.getElementById("tanggal_akhir").value;

    // Simpan data ke database
    const response = await fetch("/kontrak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, Telephone, Alamat_Kontrakan, Tipe, Biaya, tanggal_mulai, tanggal_akhir }),
    });

    const result = await response.json();

    if (result.success) {
        // Redirect to Stripe checkout
        const checkoutResponse = await fetch("/stripe-checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                items: [{
                    title: `Sewa ${Tipe} ${Alamat_Kontrakan}`,
                    price: Biaya,
                    productImg: "https://asset-3.tstatic.net/jualbeli/img/njajal/2021/9/Ide-Dekorasi-Kamar-Kos-Minimalis-untuk-Laki-laki--Cek-Harganya-di-DKI-Jakarta-master-556381413.jpg",
                    quantity: 1
                }] 
            }),
        });

        const checkoutResult = await checkoutResponse.json();
        window.location.href = checkoutResult.url;
    } else {
        console.error("Error submitting billing info:", result.error);
    }
});
