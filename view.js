document.addEventListener('DOMContentLoaded', function() {
    const tendersList = document.getElementById('tenders-list');
    const suppliersList = document.getElementById('suppliers-list');

    let tenders = JSON.parse(localStorage.getItem('tenders')) || [];
    let clients = JSON.parse(localStorage.getItem('clients')) || [];

    tenders.forEach(tender => {
        const tenderItem = document.createElement('li');
        tenderItem.innerHTML = `
            <h3>Товар: ${tender.product}</h3>
            <p><strong>Количество:</strong> ${tender.quantity}</p>
            <p><strong>Цена:</strong> ${tender.priceDuration} ${tender.currency}</p>
            <p><strong>Описание:</strong> ${tender.description}</p>
            <p><strong>Срок:</strong> ${tender.endDate}</p>
            ${tender.mediaType && tender.mediaType.startsWith('image/') ? 
                `<img src="${tender.media}" alt="Тендер Фото" style="max-width: 100%; height: auto;">` :
                tender.mediaType && tender.mediaType.startsWith('video/') ? 
                `<video controls style="max-width: 100%; height: auto;">
                    <source src="${tender.media}" type="${tender.mediaType}">
                    Ваш браузер не поддерживает видео.
                </video>` : ''}
            <ul class="bids-list"></ul>
        `;
        tendersList.appendChild(tenderItem);
    });

    clients.forEach(client => {
        const clientItem = document.createElement('li');
        clientItem.innerHTML = `
            <h3>Товар: ${client.product}</h3>
            <p><strong>Цена:</strong> ${client.price} ${client.currency}</p>
            <p><strong>Срок:</strong> ${client.endDate}</p>
            <p><strong>Описание:</strong> ${client.description}</p>
        `;
        suppliersList.appendChild(clientItem);
    });
});
