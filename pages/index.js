import React, { Component } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Alerts from 'components/Alerts/ClosingAlerts';
import Images from 'components/Images/Images';
import Inputs from 'components/Inputs/Inputs';
import InputsIcon from 'components/Inputs/InputsIcon';
import Labels from 'components/Labels/ClosingLabels';
import Menu from 'components/Menus/MenuText.js';
import MenuIcons from 'components/Menus/MenuIcons.js';
import Navbar from 'components/Navbars/Navbar';
import NavbarIcons from 'components/Navbars/NavbarIcons';
import NavbarIconsLinks from 'components/Navbars/NavbarIconsLinks';
import NavbarLinks from 'components/Navbars/NavbarLinks';
import Tabs from 'components/Tabs/TabsText';
import TabsIcons from 'components/Tabs/TabsIcons';
import Dropdowns from 'components/Dropdowns/Dropdowns';
import DropdownItems from 'components/Dropdowns/DropdownItems';
import RegularModal from 'components/Modals/RegularModal';
import SmallModal from 'components/Modals/SmallModal';
import LargeModal from 'components/Modals/LargeModal';
import Popovers from 'components/Popovers/Popovers';
import Tooltips from 'components/Tooltips/Tooltips';
import Pagination from 'components/Pagination/Pagination';
import PaginationFirstLast from 'components/Pagination/PaginationFirstLast';
import Progress from 'components/Progress/Progress';
import Icons from 'components/Icons/Icons';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

            <div className="flex gap-5 flex-wrap">
              <Buttons color="blue-gray">Button</Buttons>
              <Buttons color="gray">Button</Buttons>
              <Buttons color="brown">Button</Buttons>
              <Buttons color="deep-orange">Button</Buttons>
              <Buttons color="orange">Button</Buttons>
              <Buttons color="amber">Button</Buttons>
              <Buttons color="yellow">Button</Buttons>
              <Buttons color="lime">Button</Buttons>
              <Buttons color="light-green">Button</Buttons>
              <Buttons color="green">Button</Buttons>
              <Buttons color="teal">Button</Buttons>
              <Buttons color="cyan">Button</Buttons>
              <Buttons color="light-blue">Button</Buttons>
              <Buttons color="blue">Button</Buttons>
              <Buttons color="indigo">Button</Buttons>
              <Buttons color="deep-purple">Button</Buttons>
              <Buttons color="purple">Button</Buttons>
              <Buttons color="pink">Button</Buttons>
              <Buttons color="red">Button</Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

            <div className="flex gap-5">
              <Buttons color="pink">Button</Buttons>
              <Buttons color="pink" type="outline">
                Button
              </Buttons>
              <Buttons color="pink" rounded>
                Button
              </Buttons>
              <Buttons color="pink" type="link">
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

            <div className="flex gap-5">
              <Buttons color="pink" size="sm">
                Button
              </Buttons>
              <Buttons color="pink">Button</Buttons>
              <Buttons color="pink" size="lg">
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button With Icons</h2>

            <div className="flex gap-5">
              <Buttons color="pink">
                <Icons name="favorite" color="white" />
                Button
              </Buttons>
              <Buttons color="pink">
                Button
                <Icons name="favorite" color="white" />
              </Buttons>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Alerts</h2>
            <Alerts color="blue-gray-500">MD Tailwind Alerts</Alerts>
            <Alerts color="gray-500">MD Tailwind Alerts</Alerts>
            <Alerts color="brown-500">MD Tailwind Alerts</Alerts>
            <Alerts color="deep-orange-500">MD Tailwind Alerts</Alerts>
            <Alerts color="orange-500">MD Tailwind Alerts</Alerts>
            <Alerts color="amber-500">MD Tailwind Alerts</Alerts>
            <Alerts color="yellow-500">MD Tailwind Alerts</Alerts>
            <Alerts color="lime-500">MD Tailwind Alerts</Alerts>
            <Alerts color="light-green-500">MD Tailwind Alerts</Alerts>
            <Alerts color="green-500">MD Tailwind Alerts</Alerts>
            <Alerts color="cyan-500">MD Tailwind Alerts</Alerts>
            <Alerts color="light-blue-500">MD Tailwind Alerts</Alerts>
            <Alerts color="blue-500">MD Tailwind Alerts</Alerts>
            <Alerts color="indigo-500">MD Tailwind Alerts</Alerts>
            <Alerts color="deep-purple-500">MD Tailwind Alerts</Alerts>
            <Alerts color="purple-500">MD Tailwind Alerts</Alerts>
            <Alerts color="pink-500">MD Tailwind Alerts</Alerts>
            <Alerts color="red-500">MD Tailwind Alerts</Alerts>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Images</h2>

            <div className="flex justify-between gap-5">
              <div className="w-48">
                <Images src={require('assets/img/team-1-800x800.jpg')} />
              </div>

              <div className="w-48">
                <Images
                  src={require('assets/img/team-2-800x800.jpg')}
                  rounded
                />
              </div>

              <div className="w-48">
                <Images src={require('assets/img/team-3-800x800.jpg')} raised />
              </div>

              <div className="w-48">
                <Images
                  src={require('assets/img/team-4-470x470.png')}
                  rounded
                  raised
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Types</h2>

            <div className="flex gap-10">
              <Inputs type="text" placeholder="Input Filled" color="pink" />
              <Inputs
                type="text"
                placeholder="Input Outline"
                color="pink"
                outline
              />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Sizes</h2>

            <div className="flex gap-10 mb-5">
              <Inputs placeholder="Input Small" color="pink" size="sm" />
              <Inputs placeholder="Input Regular" color="pink" />
              <Inputs placeholder="Input Large" color="pink" size="lg" />
            </div>

            <div className="flex gap-10">
              <Inputs
                placeholder="Input Small"
                color="pink"
                size="sm"
                outline
              />
              <Inputs placeholder="Input Regular" color="pink" outline />
              <Inputs
                placeholder="Input Large"
                color="pink"
                size="lg"
                outline
              />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input With Icon</h2>

            <div className="flex gap-10 mb-5">
              <InputsIcon
                color="pink"
                size="sm"
                placeholder="Input with icon"
                iconPosition="left"
              />
              <InputsIcon
                color="pink"
                placeholder="Input with icon"
                iconPosition="left"
              />
              <InputsIcon
                color="pink"
                size="lg"
                placeholder="Input with icon"
                iconPosition="left"
              />
            </div>

            <div className="flex gap-10">
              <InputsIcon
                color="pink"
                size="sm"
                placeholder="Input with icon"
                outline
                iconPosition="right"
              />
              <InputsIcon
                color="pink"
                placeholder="Input with icon"
                outline
                iconPosition="right"
              />
              <InputsIcon
                color="pink"
                size="lg"
                placeholder="Input with icon"
                outline
                iconPosition="right"
              />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Errors</h2>

            <div className="flex gap-10">
              <Inputs
                placeholder="Input Message"
                color="pink"
                error="This is an error"
              />
              <Inputs
                placeholder="Input Message"
                color="pink"
                outline
                error="This is an error"
              />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Labels</h2>

            <div className="flex gap-3 flex-wrap">
              <Labels color="blue-gray">Label</Labels>
              <Labels color="gray">Label</Labels>
              <Labels color="brown">Label</Labels>
              <Labels color="deep-orange">Label</Labels>
              <Labels color="orange">Label</Labels>
              <Labels color="amber">Label</Labels>
              <Labels color="yellow">Label</Labels>
              <Labels color="lime">Label</Labels>
              <Labels color="light-green">Label</Labels>
              <Labels color="green">Label</Labels>
              <Labels color="teal">Label</Labels>
              <Labels color="cyan">Label</Labels>
              <Labels color="light-blue">Label</Labels>
              <Labels color="blue">Label</Labels>
              <Labels color="indigo">Label</Labels>
              <Labels color="deep-purple">Label</Labels>
              <Labels color="purple">Label</Labels>
              <Labels color="pink">Label</Labels>
              <Labels color="red">Label</Labels>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Menus</h2>
            <Menu color="pink" />
            <MenuIcons color="pink" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Navbars</h2>
            <Navbar color="pink" />
            <NavbarIcons color="pink" />
            <NavbarIconsLinks color="pink" />
            <NavbarLinks color="pink" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Tabs</h2>
            <Tabs color="pink" />
            <TabsIcons color="pink" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Positions</h2>

            <div className="flex justify-start gap-4">
              <Dropdowns color="pink">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink" position="top">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Styles</h2>

            <div className="flex justify-start gap-4">
              <Dropdowns color="pink">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink" type="outline">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink" rounded>
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink" type="link">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Sizes</h2>

            <div className="flex justify-start gap-4">
              <Dropdowns color="pink" size="sm">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns color="pink" size="lg">
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Modals</h2>

            <div className="flex gap-4">
              <SmallModal />
              <RegularModal />
              <LargeModal />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Popovers</h2>

            <div className="flex gap-4">
              <Popovers color="pink" position="left" buttonText="Popover Left">
                <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-md">
                  <div>
                    <div className="bg-white text-black p-4 mb-0 uppercase rounded">
                      popover title
                    </div>
                    <div className="text-gray-800 px-4 pb-4">
                      And here's some amazing content. It's very engaging.
                      Right?
                    </div>
                  </div>
                </div>
              </Popovers>

              <Popovers color="pink" position="top" buttonText="Popover Top">
                <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-md">
                  <div>
                    <div className="bg-white text-black p-4 mb-0 uppercase rounded">
                      popover title
                    </div>
                    <div className="text-gray-800 px-4 pb-4">
                      And here's some amazing content. It's very engaging.
                      Right?
                    </div>
                  </div>
                </div>
              </Popovers>

              <Popovers
                color="pink"
                position="right"
                buttonText="Popover Right"
              >
                <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-md">
                  <div>
                    <div className="bg-white text-black p-4 mb-0 uppercase rounded">
                      popover title
                    </div>
                    <div className="text-gray-800 px-4 pb-4">
                      And here's some amazing content. It's very engaging.
                      Right?
                    </div>
                  </div>
                </div>
              </Popovers>

              <Popovers
                color="pink"
                position="bottom"
                buttonText="Popover Bottom"
              >
                <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-md">
                  <div>
                    <div className="bg-white text-black p-4 mb-0 uppercase rounded">
                      popover title
                    </div>
                    <div className="text-gray-800 px-4 pb-4">
                      And here's some amazing content. It's very engaging.
                      Right?
                    </div>
                  </div>
                </div>
              </Popovers>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Tooltips</h2>

            <div className="flex gap-4">
              <Tooltips color="pink" position="left" buttonText="Tooltip Left">
                <div className="px-2.5 py-1.5 bg-black bg-opacity-75 text-white text-sm rounded">
                  Tooltip Left
                </div>
              </Tooltips>
              <Tooltips color="pink" position="top" buttonText="Tooltip Top">
                <div className="px-2.5 py-1.5 bg-black bg-opacity-75 text-white text-sm rounded">
                  Tooltip Top
                </div>
              </Tooltips>
              <Tooltips
                color="pink"
                position="right"
                buttonText="Tooltip Right"
              >
                <div className="px-2.5 py-1.5 bg-black bg-opacity-75 text-white text-sm rounded">
                  Tooltip Right
                </div>
              </Tooltips>
              <Tooltips
                color="pink"
                position="bottom"
                buttonText="Tooltip Bottom"
              >
                <div className="px-2.5 py-1.5 bg-black bg-opacity-75 text-white text-sm rounded">
                  Tooltip Bottom
                </div>
              </Tooltips>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Paginations</h2>

            <div className="flex flex-col gap-4">
              <Pagination color="pink" />
              <PaginationFirstLast color="pink" />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Progress</h2>

            <Progress color="pink" value="30" />
            <Progress color="pink" value="50" percentage />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Cards</h2>

            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full"
                src="https://miro.medium.com/max/9792/0*xKTwlgXlZPC7Xv3r"
                alt="Patterns"
              />
              <div className="px-7 py-5">
                <div className="font-bold text-xl mb-2 text-gray-900">
                  Card Title
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-7 mt-2 pb-6">
                <Buttons color="pink" size="lg">
                  Read More
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
