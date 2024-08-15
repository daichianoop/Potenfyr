import React from 'react';
import "@/app/styles/PricingCard.css";
const Journeyman_Plan = "(₹379/month | $4.89/month)"
const Squire_Plan = "(₹599/month | $7.49/month)"
const Knight_Plan = "(₹749/month | $9.49/month)"
const Guardian_Plan = "(₹999/month | $12.59/month) "

const Pricing = () => {
  return (
      <>
        <div className={"bg-[url('/bg-div-12.jpg')] overflow-hidden bg-cover"}>
          <div className={" text-neutral-200 pt-28 pb-10 px-10 md:px-10 lg:px-10 xl:px-10"}
               style={{
                 backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))',
               }}>
            <div>
              <div className={"div-1 flex flex-wrap items-center justify-center gap-x-10 mb-10"}>
                <div className="pricing-card h-64 w-80 md:w-80 lg:w-80 xl:w-80">
                  <div className="pricing-first-content">
                    <div>
                      <div>

                      </div>
                      <div>Journeyman Plan</div>
                      <div>${Journeyman_Plan}</div>
                    </div>
                  </div>
                  <div className="pricing-second-content">
                    <div>
                      <div>3 vCPU Cores</div>
                      <div>5GB DDR4 / DDR5 RAM</div>
                      <div>60GB NVMe SSD</div>
                      <div>1x Cloud Backups</div>
                      <div>2x Additional Ports</div>
                      <div>3x Database</div>
                    </div>
                  </div>
                </div>

                <div className="pricing-card h-64 w-80 md:w-80 lg:w-80 xl:w-80">
                  <div className="pricing-first-content">
                    <span>Squire Plan</span>
                  </div>
                  <div className="pricing-second-content">
                    <div>
                      <div>4 vCPU Cores</div>
                      <div>8GB DDR4 / DDR5 RAM</div>
                      <div>80GB NVMe SSD</div>
                      <div>1x Cloud Backups</div>
                      <div>3x Additional Ports</div>
                      <div>4x Database</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={"div-2 flex flex-wrap items-center justify-center gap-x-10 "}>
              <div className="pricing-card h-64 w-80 md:w-80 lg:w-80 xl:w-80">
                <div className="pricing-first-content">
                  <span>Knight Plan</span>
                </div>
                <div className="pricing-second-content">
                  <div>
                    <div>6 vCPU Cores</div>
                    <div>10GB DDR4 / DDR5 RAM</div>
                    <div>100GB NVMe SSD</div>
                    <div>1x Cloud Backups</div>
                    <div>4x Additional Ports</div>
                    <div>6x Database</div>
                  </div>
                </div>
              </div>

              <div className="pricing-card h-64 w-80 md:w-80 lg:w-80 xl:w-80">
                <div className="pricing-first-content">
                  <span>Guardian Plan </span>
                </div>
                <div className="pricing-second-content">
                  <div>
                    <div>Unmetered vCPU Cores</div>
                    <div>14GB DDR4 / DDR5 RAM</div>
                    <div>120GB NVMe SSD</div>
                    <div>2x Cloud Backups</div>
                    <div>8x Additional Ports</div>
                    <div>8x Database</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Pricing;