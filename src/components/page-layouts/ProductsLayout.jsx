import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col items-center self-stretch justify-between px-5 py-6 ml-1 bg-white max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1527px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b56f9e13-a06f-4da6-93a3-6a534b80b449?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
            className="aspect-[2.43] object-cover object-center w-[146px] overflow-hidden shrink-0"
          />
          <div className="items-start self-center flex w-[493px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            <div className="self-center my-auto text-base text-center text-indigo-500">
              Flights
            </div>
            <div className="self-center my-auto text-base text-center text-slate-400">
              Hotels
            </div>
            <div className="self-center my-auto text-base text-center text-slate-400">
              Packages
            </div>
            <div className="self-center my-auto text-base text-center text-slate-400">
              Sign in
            </div>
            <div className="items-center bg-indigo-500 self-stretch flex w-[105px] max-w-full flex-col px-5 py-4 rounded">
              <div className="self-center -mt-px text-base text-neutral-50">
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1390px] mt-16 px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col max-md:max-w-full max-md:mt-12">
              <div className="text-2xl font-bold text-indigo-500">
                Passenger information
              </div>
              <div className="text-slate-400 text-xl w-[757px] max-w-full mt-7">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </div>
              <div className="mt-12 text-xl font-semibold text-slate-500">
                Passenger 1 (Adult)
              </div>
              <div className="flex w-[719px] max-w-full items-start justify-between gap-5 mt-8 max-md:flex-wrap max-md:justify-center">
                <div className="justify-center text-black text-lg self-stretch w-[221px] items-end border-[color:var(--grey-300,#A1B0CC)] bg-white max-w-full px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Sophia
                </div>
                <div className="justify-center text-slate-400 text-lg self-stretch w-[222px] items-end border-[color:var(--grey-300,#A1B0CC)] bg-white max-w-full px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Middle
                </div>
                <div className="justify-center text-gray-700 text-lg self-stretch w-[222px] items-end border-[color:var(--grey-300,#A1B0CC)] bg-white max-w-full pl-3.5 pr-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Knowles
                </div>
              </div>
              <div className="flex w-[528px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap">
                <div className="justify-center text-slate-400 text-lg w-[221px] items-end border-[color:var(--grey-300,#A1B0CC)] bg-white max-w-full px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Suffix
                </div>
                <div className="flex flex-col items-center grow shrink-0 basis-auto">
                  <div className="justify-center text-gray-700 text-lg max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[280px] pl-3.5 pr-3.5 py-2.5 rounded border-[1.11px] border-solid">
                    11/11/1989
                  </div>
                  <div className="mt-2 text-xs text-slate-400">MM/DD/YY</div>
                </div>
              </div>
              <div className="flex w-[692px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap">
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[332px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  sophiaknowles89@tripma.com
                </div>
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[333px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  123-456-7890
                </div>
              </div>
              <div className="flex w-[692px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap">
                <div className="justify-center text-slate-400 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[332px] grow basis-auto pt-2.5 pb-2 px-3.5 rounded border-[1.11px] border-solid">
                  Redress number
                </div>
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[333px] grow basis-auto pt-2.5 pb-2 px-3.5 rounded border-[1.11px] border-solid">
                  123456789
                </div>
              </div>
              <div className="mt-16 text-xl font-semibold text-slate-500">
                Emergency contact information
              </div>
              <div className="items-start flex w-[197px] max-w-full gap-2.5 mt-9">
                <div className="justify-center items-center self-center flex w-[17px] h-[17px] flex-col my-auto" />
                <div className="self-stretch text-base text-slate-500">
                  Same as Passenger 1
                </div>
              </div>
              <div className="flex w-[692px] max-w-full items-start justify-between gap-5 mt-8 max-md:flex-wrap">
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[332px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Sophia
                </div>
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[333px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Knowles
                </div>
              </div>
              <div className="flex w-[692px] max-w-full items-start justify-between gap-5 mt-7 max-md:flex-wrap">
                <div className="justify-center text-gray-700 text-xl underline self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[332px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  <a href="mailto:sophiaknowles89@tripma.com" target="_blank">
                    Email address*
                  </a>
                </div>
                <div className="justify-center text-gray-700 text-lg self-stretch max-w-full items-end border-[color:var(--grey-300,#A1B0CC)] bg-white w-[333px] grow basis-auto px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  123-456-7890
                </div>
              </div>
              <div className="text-xl font-semibold text-slate-500 mt-14">
                Bag information
              </div>
              <div className="text-indigo-500 text-xl w-[757px] max-w-full mt-6">
                <span className="text-slate-400">
                  Each passenger is allowed one free carry-on bag and one
                  personal item. First checked bag for each passenger is also
                  free. Second bag check fees are waived for loyalty program
                  members. See the
                </span>
                <span className="text-indigo-500"> full bag policy</span>
                <span className="text-slate-400">.</span>
              </div>
              <div className="flex w-[515px] max-w-full items-start justify-between gap-5 mt-12 max-md:flex-wrap">
                <div className="flex flex-col mt-px">
                  <div className="text-xl font-semibold text-slate-400">
                    Passenger 1
                  </div>
                  <div className="text-xl font-semibold text-slate-500 mt-7">
                    Sophia Knowles
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-semibold text-slate-400">
                    Checked bags
                  </div>
                  <div className="flex w-[135px] max-w-full items-start justify-between gap-5 mt-3.5 max-md:justify-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee118750-8b5d-416c-aa7f-aa1cc7fcdad1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                      className="items-center justify-center object-cover object-center overflow-hidden aspect-square w-9 shrink-0"
                    />
                    <div className="self-center justify-center my-auto text-xl text-center text-slate-500">
                      1
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf3dfdfe-7aa5-4fa1-b19f-b5df8e0c17cc?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                      className="items-center justify-center object-cover object-center overflow-hidden aspect-square w-9 shrink-0"
                    />
                  </div>
                </div>
              </div>
              <div className="items-start flex w-[358px] max-w-full justify-between gap-5 mt-20">
                <div className="text-indigo-500 text-lg self-stretch items-center border-[color:var(--Purple-Blue,#605DEC)] w-[178px] max-w-full px-6 py-3.5 rounded border-[1.11px] border-solid">
                  Save and close
                </div>
                <div className="text-neutral-50 text-lg self-stretch items-center bg-indigo-500 w-[153px] max-w-full px-6 py-3.5 rounded">
                  Select seats
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-48 grow max-md:max-w-full max-md:mt-12">
              <div className="items-end self-stretch flex flex-col mr-1.5 pb-5 max-md:max-w-full">
                <div className="items-start border-[color:var(--Purple-Extra-Light,#E9E8FC)] bg-white flex w-[443px] max-w-full flex-col px-4 py-7 rounded-xl border-[1.11px] border-solid">
                  <div className="items-start self-center flex w-[391px] max-w-full gap-2 max-md:justify-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aff4cbf-6f07-40e5-a40c-3d5972d87e01?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                      className="aspect-square object-cover object-center w-[45px] justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="items-start flex flex-col w-[165px]">
                      <div className="self-stretch w-full text-base text-slate-800">
                        Hawaiian Airlines
                      </div>
                      <div className="self-stretch text-slate-400 text-base w-full mt-1.5">
                        FIG4312
                      </div>
                    </div>
                    <div className="items-start flex flex-col w-[164px]">
                      <div className="self-stretch w-full text-base text-right text-slate-800">
                        16h 45m (+1d)
                      </div>
                      <div className="self-stretch text-slate-800 text-right text-base w-full mt-1.5">
                        7:00 AM - 4:15 PM
                      </div>
                      <div className="self-stretch w-full mt-1 text-base text-right text-slate-400">
                        2h 45m in HNL
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch w-full py-1 mt-5 bg-white">
                    <div className="self-stretch bg-violet-100 flex w-full h-0.5 flex-col" />
                  </div>
                  <div className="items-start self-center flex w-[391px] max-w-full gap-2 mt-5 max-md:justify-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/936b75af-a998-48f8-842c-a903368c283d?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                      className="aspect-[1.02] object-cover object-center w-[45px] justify-center items-center overflow-hidden shrink-0"
                    />
                    <div className="items-start flex flex-col w-[165px]">
                      <div className="self-stretch w-full text-base text-slate-800">
                        Hawaiian Airlines
                      </div>
                      <div className="self-stretch w-full mt-1 text-base text-slate-400">
                        FIG4312
                      </div>
                    </div>
                    <div className="items-start flex flex-col w-[164px]">
                      <div className="self-stretch w-full text-base text-right text-slate-800">
                        16h 45m (+1d)
                      </div>
                      <div className="self-stretch w-full mt-1 text-base text-right text-slate-800">
                        7:00 AM - 4:15 PM
                      </div>
                      <div className="self-stretch text-slate-400 text-right text-base w-full mt-1.5">
                        2h 45m in HNL
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-between items-start flex w-[221px] max-w-full gap-5 mr-4 mt-5 max-md:mr-2.5">
                  <div className="items-start self-stretch flex flex-col w-[133px]">
                    <div className="self-stretch w-full text-base font-semibold text-right text-slate-800">
                      Subtotal
                    </div>
                    <div className="text-slate-800 text-right text-base font-semibold self-stretch w-full mt-2.5">
                      Taxes and Fees
                    </div>
                    <div className="text-slate-800 text-right text-base font-semibold self-stretch w-full mt-2.5">
                      Total
                    </div>
                  </div>
                  <div className="flex flex-col items-end self-stretch">
                    <div className="self-stretch text-base font-semibold text-right text-slate-800">
                      $503
                    </div>
                    <div className="text-slate-800 text-right text-base font-semibold self-stretch mt-2.5">
                      $121
                    </div>
                    <div className="text-slate-800 text-right text-base font-semibold self-stretch mt-2.5">
                      $624
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center bg-indigo-500 flex w-[154px] max-w-full flex-col mr-1.5 mt-10 px-5 py-3.5 rounded">
                <div className="self-center text-lg text-neutral-50">
                  Select seats
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6d18437-0481-4c9d-86ad-39b319065506?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                className="aspect-[0.74] object-cover object-center w-[429px] overflow-hidden max-w-full grow ml-5 mt-28"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch px-5 pt-10 pb-8 mt-16 ml-1 bg-white grow max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1387px] flex-col mt-11 max-md:max-w-full">
          <div className="flex flex-col items-start self-center justify-between w-full pb-6 pr-5 max-md:max-w-full">
            <div className="self-center w-full max-w-[1331px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[12%] max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/649f590a-d8dd-4d9b-a9b5-cba6f4ece66c?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                    className="aspect-[2.42] object-cover object-center w-[145px] overflow-hidden shrink-0 max-md:mt-12"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="grow max-md:max-w-full max-md:mt-12">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex flex-col w-[195px] my-auto max-md:mt-12">
                          <div className="self-stretch w-full text-lg font-bold text-slate-500">
                            About
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            About Tripma
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            How it works
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Careers
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Press
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            Blog
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Forum
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col w-[217px] mt-6 max-md:mt-12">
                          <div className="self-stretch w-full text-lg font-bold text-slate-500">
                            Partner with us
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            Partnership programs
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Affiliate program
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Connectivity partners
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Promotions and events
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            Integrations
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Community
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Loyalty program
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex flex-col w-[195px] my-auto max-md:mt-12">
                          <div className="self-stretch w-full text-lg font-bold text-slate-500">
                            Support
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            Help Center
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Contact us
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Privacy policy
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Terms of service
                          </div>
                          <div className="self-stretch w-full mt-4 text-base text-slate-400">
                            Trust and safety
                          </div>
                          <div className="self-stretch w-full mt-5 text-base text-slate-400">
                            Accessibility
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-start pt-6 max-md:mt-12">
                          <div className="items-start flex w-[217px] max-w-full flex-col">
                            <div className="self-stretch w-full text-lg font-bold text-slate-500">
                              Get the app
                            </div>
                            <div className="self-stretch w-full mt-4 text-base text-slate-400">
                              Tripma for Android
                            </div>
                            <div className="self-stretch w-full mt-5 text-base text-slate-400">
                              Tripma for iOS
                            </div>
                            <div className="self-stretch w-full mt-5 text-base text-slate-400">
                              Mobile site
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64774a9f-4f10-45b9-a904-7c44f4c38068?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                            className="aspect-[3.33] object-cover object-center w-[150px] overflow-hidden shrink-0 mt-9"
                          />
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f236629-d535-448e-95e6-e550f73225e7?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                            className="aspect-[3.33] object-cover object-center w-[150px] justify-center items-center overflow-hidden shrink-0 mt-3.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full max-w-[1331px] gap-5 mt-20 pl-2.5 py-2.5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-stretch flex w-[124px] max-w-full justify-between gap-5 max-md:justify-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/604235fe-ddc8-472c-a573-10d64e38c160?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                className="aspect-square object-cover object-center w-[26px] overflow-hidden shrink-0"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a78ea190-a3d5-4a60-9b6b-81b7df4838a1?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                className="aspect-[1.04] object-cover object-center w-[27px] overflow-hidden shrink-0"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a36574b5-6194-46bf-8a55-c75af0bc5e06?apiKey=38a9b91e1dce44df94d41c4b492a9ad4&"
                className="aspect-[1.04] object-cover object-center w-[27px] overflow-hidden shrink-0"
              />
            </div>
            <div className="self-stretch text-xl text-right text-slate-400">
              © 2020 Tripma incorporated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
