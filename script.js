const tonConnect = new TONConnect();
const connectButton = document.getElementById("connectWallet");
const nftList = document.getElementById("nftList");

connectButton.addEventListener("click", async () => {
    try {
        await tonConnect.connectWallet();
        const wallet = await tonConnect.getWallet();
        connectButton.textContent = `Кошелек: ${wallet.address}`;
        loadNFTs(wallet.address);
    } catch (error) {
        console.error("Ошибка подключения:", error);
    }
});

async function loadNFTs(walletAddress) {
    try {
        const response = await fetch(`https://tonapi.io/v1/nft/items?owner=${walletAddress}`);
        const data = await response.json();
        displayNFTs(data.nfts);
    } catch (error) {
        console.error("Ошибка загрузки NFT:", error);
    }
}

function displayNFTs(nfts) {
    nftList.innerHTML = "";
    nfts.forEach(nft => {
        const nftItem = document.createElement("div");
        nftItem.innerHTML = `
            <img src="${nft.preview.url}" width="100">
            <p>${nft.name}</p>
            <p>${nft.description}</p>
            <button onclick="buyNFT('${nft.address}')">Купить</button>
        `;
        nftList.appendChild(nftItem);
    });
}

async function buyNFT(nftAddress) {
    alert(`Покупка NFT ${nftAddress} пока не реализована`);
}
