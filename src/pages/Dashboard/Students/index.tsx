import { createRef, useEffect, useRef, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { stringToHTML } from "../../../utils/helper";
import Lucide from "../../../base-components/Lucide";
import { Menu } from "../../../base-components/Headless";
import Button from "../../../base-components/Button";
import { FormInput, FormSelect } from "../../../base-components/Form";
import * as xlsx from "xlsx";
import { createIcons, icons } from "lucide";

interface Response {
  firstName?: string;
  lastName?: string;
  university?: string;
  image?: string;
  status?: string;
}[]

const index = () => {
  const tableRef = createRef<HTMLDivElement>();
  const tabulator = useRef<Tabulator>();
  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });

  const imageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/fakers/*.{jpg,jpeg,png,svg}", { eager: true });
  const initTabulator = () => {
    if (tableRef.current) {
      tabulator.current = new Tabulator(tableRef.current, {
        ajaxURL: "https://dummyjson.com/users",
        paginationMode: "remote",
        filterMode: "remote",
        sortMode: "remote",
        printAsHtml: true,
        printStyled: true,
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No matching records found",
        ajaxResponse(url, params, response) {
          console.log(response.users);
          return response.users.d;
        },
        columns: [
          {
            title: "",
            formatter: "responsiveCollapse",
            width: 40,
            minWidth: 30,
            hozAlign: "center",
            resizable: false,
            headerSort: false,
          },

          // For HTML table
          {
            title: "STUDENT NAME",
            minWidth: 200,
            responsive: 0,
            field: "name",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              console.log("Iresponse: ", response)

              return `<div>
                <div class="font-medium whitespace-nowrap">${response.firstName + ' ' + response.lastName}</div>
                <div class="text-slate-500 text-xs whitespace-nowrap">${response.university}</div>
              </div>`;
            },
          },
          {
            title: "IMAGE",
            minWidth: 200,
            field: "image",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return response.image
                ? `<div class="flex lg:justify-center">
                    <div class="intro-x w-10 h-10 image-fit">
                      <img alt="Sample Dash Image" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${imageAssets[
                  "/src/assets/images/fakers/" + response.image
                ].default
                }">
                </div>`
                : "";
            },
          },
          {
            title: "CLASS",
            minWidth: 200,
            field: "class",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "STATUS",
            minWidth: 200,
            field: "status",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center lg:justify-center ${response.status ? "text-success" : "text-danger"
                }">
                <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${response.status ? "Active" : "Inactive"
                }
              </div>`;
            },
          },
          {
            title: "ACTIONS",
            minWidth: 200,
            field: "actions",
            responsive: 1,
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter() {
              const a =
                stringToHTML(`<div class="flex lg:justify-center items-center">
                  <a class="flex items-center mr-3" href="javascript:;">
                    <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit
                  </a>
                  <a class="flex items-center text-danger" href="javascript:;">
                    <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
                  </a>
                </div>`);
              a.addEventListener("click", function () {
                // On click actions
              });
              return a;
            },
          },

          // For print format
          {
            title: "STUDENT NAME",
            field: "name",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "PROGRAMME",
            field: "programme",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "CLASS",
            field: "class",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "STATUS",
            field: "status",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue() ? "Active" : "Inactive";
            },
          },
          {
            title: "IMAGE 1",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[0];
            },
          },
          {
            title: "IMAGE 2",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[1];
            },
          },
          {
            title: "IMAGE 3",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[2];
            },
          },
        ],
      });
    }

    tabulator.current?.on("renderComplete", () => {
      createIcons({
        icons,
        attrs: {
          "stroke-width": 1.5,
        },
        nameAttr: "data-lucide",
      });
    });
  };

  // Redraw table onresize
  const reInitOnResizeWindow = () => {
    window.addEventListener("resize", () => {
      if (tabulator.current) {
        tabulator.current.redraw();
        createIcons({
          icons,
          attrs: {
            "stroke-width": 1.5,
          },
          nameAttr: "data-lucide",
        });
      }
    });
  };

  // Filter function
  const onFilter = () => {
    if (tabulator.current) {
      tabulator.current.setFilter(filter.field, filter.type, filter.value);
    }
  };

  // On reset filter
  const onResetFilter = () => {
    setFilter({
      ...filter,
      field: "name",
      type: "like",
      value: "",
    });
    onFilter();
  };

  // Export
  const onExportCsv = () => {
    if (tabulator.current) {
      tabulator.current.download("csv", "data.csv");
    }
  };

  const onExportJson = () => {
    if (tabulator.current) {
      tabulator.current.download("json", "data.json");
    }
  };

  const onExportXlsx = () => {
    if (tabulator.current) {
      (window as any).XLSX = xlsx;
      tabulator.current.download("xlsx", "data.xlsx", {
        sheetName: "Products",
      });
    }
  };

  const onExportHtml = () => {
    if (tabulator.current) {
      tabulator.current.download("html", "data.html", {
        style: true,
      });
    }
  };

  // Print
  const onPrint = () => {
    if (tabulator.current) {
      tabulator.current.print();
    }
  };

  useEffect(() => {
    initTabulator();
    reInitOnResizeWindow();
  }, []);

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Students</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            Add New Student
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 font-normal !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="UserPlus" className="w-4 h-4 mr-2" /> New Teacher
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="BookmarkPlus" className="w-4 h-4 mr-2" /> New Class
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="p-5 mt-5 intro-y box">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form
            id="tabulator-html-filter-form"
            className="xl:flex sm:mr-auto"
            onSubmit={(e) => {
              e.preventDefault();
              onFilter();
            }}
          >
            <div className="items-center sm:flex sm:mr-4">
              <label className="flex-none w-12 mr-2 xl:w-auto xl:flex-initial">
                Field
              </label>
              <FormSelect
                id="tabulator-html-filter-field"
                value={filter.field}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    field: e.target.value,
                  });
                }}
                className="w-full mt-2 2xl:w-full sm:mt-0 sm:w-auto"
              >
                <option value="name">Name</option>
                <option value="class">Class</option>
                <option value="programme">Programme</option>
              </FormSelect>
            </div>

            <div className="items-center justify-end mt-2 sm:flex sm:mr-4 xl:mt-0">
              <label className="flex-none w-12 mr-2 xl:w-auto xl:flex-initial">
                Value
              </label>
              <FormInput
                id="tabulator-html-filter-value"
                value={filter.value}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    value: e.target.value,
                  });
                }}
                type="text"
                className="mt-2 sm:w-40 2xl:w-full sm:mt-0"
                placeholder="Search..."
              />
            </div>
            <div className="mt-2 xl:mt-0">
              <Button
                id="tabulator-html-filter-go"
                variant="primary"
                type="button"
                className="w-full sm:w-16"
                onClick={onFilter}
              >
                Go
              </Button>
              <Button
                id="tabulator-html-filter-reset"
                variant="secondary"
                type="button"
                className="w-full mt-2 sm:w-16 sm:mt-0 sm:ml-1"
                onClick={onResetFilter}
              >
                Reset
              </Button>
            </div>
          </form>
          <div className="flex mt-5 sm:mt-0">
            <Button
              id="tabulator-print"
              variant="outline-secondary"
              className="w-1/2 mr-2 sm:w-auto"
              onClick={onPrint}
            >
              <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
            </Button>
            <Menu className="w-1/2 sm:w-auto">
              <Menu.Button
                as={Button}
                className="w-full sm:w-auto"
              >
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                <Lucide
                  icon="ChevronDown"
                  className="w-4 h-4 ml-auto sm:ml-2"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item onClick={onExportCsv}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export CSV
                </Menu.Item>
                <Menu.Item onClick={onExportJson}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  JSON
                </Menu.Item>
                <Menu.Item onClick={onExportXlsx}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  XLSX
                </Menu.Item>
                <Menu.Item onClick={onExportHtml}>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                  HTML
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <div id="tabulator" ref={tableRef} className="mt-5"></div>
        </div>
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default index;
