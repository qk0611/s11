document.addEventListener('DOMContentLoaded', function() {
    const tenderForm = document.getElementById('tender-form');
    const clientForm = document.getElementById('client-form');

    tenderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const tender = {
            quantity: document.getElementById('quantity').value,
            product: document.getElementById('product').value,
            priceDuration: document.getElementById('priceDuration').value,
            currency: document.getElementById('currency').value,
            description: document.getElementById('description').value,
            endDate: document.getElementById('endDate').value,
            media: document.getElementById('media').files[0] ? URL.createObjectURL(document.getElementById('media').files[0]) : null,
            mediaType: document.getElementById('media').files[0] ? document.getElementById('media').files[0].type : null
        };

        let tenders = JSON.parse(localStorage.getItem('tenders')) || [];
        tenders.push(tender);
        localStorage.setItem('tenders', JSON.stringify(tenders));

        tenderForm.reset();
    });

    clientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const client = {
            product: document.getElementById('client-product').value,
            price: document.getElementById('client-price').value,
            currency: document.getElementById('client-currency').value,
            endDate: document.getElementById('client-endDate').value,
            description: document.getElementById('client-description').value
        };

        let clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));

        clientForm.reset();
    });
});
