import React from 'react';
import Image   from "next/image";
import '@/app/components/ComponentStyles/Slider001.css'
const Slider001 = () => {
  return (
      <>
        <div className="slider bg-transparent pt-2 backdrop-blur-md bg-blend-luminosity border-2 border-neutral-600" reverse="true">
          <div className="list">
            <div className="item p-2" style={{'--position': 1}}>
              <div>
                <Image className={"rounded-md"} src="/csgo-logo.png" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Counter Strike</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 2}}>
              <div>
                <Image className={"rounded-md"} src="/discord.webp" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Discord Bot</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 3}}>
              <div>
                <Image className={"rounded-md"} src="/minebed-img.png" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Minecr. Bedr.</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 4}}>
              <div>
                <Image className={"rounded-md"} src="/minejava-img.jpg" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Minecr. Java</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 5}}>
              <div>
                <Image className={"rounded-md"} src="/gta.png" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">GTA Servers</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 6}}>
              <div>
                <Image className={"rounded-md"} src="/palworld.jpg" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Palworld</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 7}}>
              <div>
                <Image className={"rounded-md"} src="/terraria.jpg" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Terraria</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 8}}>
              <div>
                <Image className={"rounded-md"} src="/server.jpg" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Database</div>
              </div>
            </div>
            <div className="item p-2" style={{'--position': 9}}>
              <div>
                <Image className={"rounded-md"} src="/other-games.jpg" alt="" width={200} height={200}/>
              </div>
              <div>
                <div className="item-name">Other Games</div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Slider001;