import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import TITLE_BG from "../assets/images/top-title.png";

import { changeBackgroundUrl, copyClipboard } from "../utils/utils";
import useWallet from "../hooks/useWallet";
import { useShuttle } from "@delphi-labs/shuttle-react";
import { useAccountStore } from "../store/account";

export default function Loots() {
  const navigate = useNavigate();
  const wallet = useWallet();
  const { disconnectWallet } = useShuttle();
  const account = useAccountStore();

  const handleDisconnect = () => {
    disconnectWallet(wallet);
    navigate("/");
  };

  useEffect(() => {
    if (!wallet) navigate("/");
  }, []);

  const showUserInfo = (address: string, balance: number) => {
    let res =
      address.substring(0, 12) +
      "..." +
      address.substring(address.length - 6, address.length);
    res += ` (${balance}inj)`;
    return res;
  };

  useEffect(() => {
    if (window.innerWidth > 768) changeBackgroundUrl("var(--main-bg-url)");
    else changeBackgroundUrl("var(--main-bg-sm-url)");
  }, []);

  return (
    <div className='loots__container container flex flex-col'>
      <section className='top-banner flex flex-col items-center gap-10 mt-10 lg:flex-row'>
        <div className='w-[300px]'></div>
        <div className='top-title flex justify-center flex-grow'>
          <img src={TITLE_BG} />
        </div>
        <div className='wallet-info justify-center items-center lg:flex-nowrap'>
          <div
            className='address cursor-pointer'
            onClick={() => copyClipboard(account.address)}
            title='Click to copy address to clipboard.'
          >
            {showUserInfo(account.address, account.totalBalance)}
          </div>
          <div className='aliens-font3 ml-5 text-16' onClick={handleDisconnect}>
            Disconnect
          </div>
          {account.isAdmin && (
            <Link to='/admin' className='aliens-font3 ml-5 text-16'>
              Airdrop
            </Link>
          )}
        </div>
      </section>

      {/* <section className="airdrop-info flex flex-col-reverse items-center lg:items-end justify-center my-14 gap-20 lg:flex-row w-full">
        <div className="total-earned flex flex-col gap-2 items-center lg:items-start">
          <span>Total Earned</span>
          <span className="text-36 w-max">{account.totalEarned} INJ</span>
        </div>
        <div className="locktime-progress">
          <AirdropProgress />
        </div>
      </section> */}

      <section className='nft-details relative text-18'>
        <Link
          to='/main'
          className='absolute top-[-24px] right-0 aliens-font3 ml-5 text-16 lg:right-10'
        >
          Back
        </Link>

        {/* <div className='header flex flex-row w-full'>
          <span className='nft-img'>Image</span>
          <span className='nft-id'>#</span>
          <span className='staked-day'>Time staked</span>
          <span className='until-day'>Until unlock</span>
          <span className='actions hidden flex-grow lg:flex'></span>
        </div> */}

        <div className='m-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='nft-inner flex flex-col items-center p-4 rounded '>
              <img className='nft-img' src='/src/assets/images/temp.png' />
              <span className=' text-6xl '>10</span>
            </div>
            <div className='nft-inner flex flex-col items-center p-4 rounded '>
              <img className='nft-img' src='/src/assets/images/temp.png' />
              <span className=' text-6xl '>10</span>
            </div>
            <div className='nft-inner flex flex-col items-center p-4 rounded '>
              <img className='nft-img' src='/src/assets/images/temp.png' />
              <span className=' text-6xl '>10</span>
            </div>
            <div className='nft-inner flex flex-col items-center p-4 rounded '>
              <img className='nft-img' src='/src/assets/images/temp.png' />
              <span className=' text-6xl '>10</span>
            </div>
          </div>

          {/* <div className='nft-card flex flex-col'>
            <div className='nft-inner flex flex-col items-center'>
              <img className='nft-img' src='/src/assets/images/temp.png' />
            </div>
          </div>
          <div className='nft-card flex flex-col'>
            <div className='nft-inner flex flex-col items-center'>
              <img className='nft-img' src='/src/assets/images/temp.png' />
            </div>
          </div>
          <div className='nft-card flex flex-col'>
            <div className='nft-inner flex flex-col items-center'>
              <img className='nft-img' src='/src/assets/images/temp.png' />
            </div>
          </div>
          <div className='nft-card flex flex-col'>
            <div className='nft-inner flex flex-col items-center'>
              <img className='nft-img' src='/src/assets/images/temp.png' />
            </div>
          </div>
          <div className='nft-card flex flex-col'>
            <div className='nft-inner flex flex-col items-center'>
              <img className='nft-img' src='/src/assets/images/temp.png' />
            </div>
          </div> */}
          {/* {account.stakedNfts.map((nft: any) => (
            <NFTDetailRow key={nft.token_id} data={nft} />
          ))} */}
        </div>
      </section>
    </div>
  );
}
