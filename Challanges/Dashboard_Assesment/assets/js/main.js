var arrCaption = ['Item', 'Date', 'Type', 'Estcost', 'Last', 'List', 'Auto', 'BuyNow'];

var arrayContent = [
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '8nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '10nov,8:35pm', Type: 'want', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'waiting', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'cancled', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'Discarded', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'want', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' },
    { Item: 'skippy peanut butter 160z', Date: '7nov,8:35pm', Type: 'want', Estcost: '$40.27', Last: '18Aug', List: 'Grocery', Auto: 'No', BuyNow: 'amazon' }
];

tableRows(arrayContent);

function tableRows(data) {
    const userbody = document.getElementById('tableBody');

    data.forEach((allData) => {
        const tabRow = document.createElement('tr');
        for (const key in allData) {
            if (['Item', 'Date', 'Type', 'Estcost', 'Last', 'List', 'Auto', 'BuyNow'].includes(key)) {
                const elem = allData[key];
                const tabCol = document.createElement('td');
                tabCol.textContent = elem;
                tabRow.appendChild(tabCol);
            }
        }
        userbody.appendChild(tabRow);
    });
}
