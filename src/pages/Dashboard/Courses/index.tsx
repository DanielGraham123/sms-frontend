import { Menu } from "../../../base-components/Headless";
import Button from "../../../base-components/Button";
import Table from "../../../base-components/Table";
import Lucide from "../../../base-components/Lucide";
import { useEffect, useState } from "react";
import CourseService from "../../../services/CourseService";
import { useNavigate } from "react-router-dom";

const index = () => {
    const [courses, setCourses] = useState<any>([])

    const navigate = useNavigate();

    // Print
    const onPrint = () => {
        // if (tabulator.current) {
        //     tabulator.current.print();
        // }
    };

    // Export
    const onExportCsv = () => {
        // if (tabulator.current) {
        //     tabulator.current.download("csv", "data.csv");
        // }
    };

    const onExportJson = () => {
        // if (tabulator.current) {
        //     tabulator.current.download("json", "data.json");
        // }
    };

    const onExportXlsx = () => {
        // if (tabulator.current) {
        //     (window as any).XLSX = xlsx;
        //     tabulator.current.download("xlsx", "data.xlsx", {
        //         sheetName: "Products",
        //     });
        // }
    };

    const onExportHtml = () => {
        // if (tabulator.current) {
        //     tabulator.current.download("html", "data.html", {
        //         style: true,
        //     });
        // }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            CourseService.getAllCourses().then((response) => {
                console.log("Courses: ", response);
                setCourses(response)
            })
        }
        fetchCourses()
    }, [])

    return (
        <div>
            <div className="flex items-center mt-8 intro-y">
                <h2 className="mr-auto text-lg font-medium">Courses</h2>
                <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
                    <Button onClick={() => navigate('/portal/courses/add')} variant="primary" className="mr-2 shadow-md">
                        Add A Course
                    </Button>
                    <Menu className="ml-auto sm:ml-0">
                        <Menu.Button as={Button} className="px-2 font-normal !box">
                            <span className="flex items-center justify-center w-5 h-5">
                                <Lucide icon="Plus" className="w-4 h-4" />
                            </span>
                        </Menu.Button>
                        <Menu.Items className="w-40">
                            <Menu.Item>
                                <Lucide icon="BookOpen" className="w-4 h-4 mr-2" /> New Class
                            </Menu.Item>
                            <Menu.Item>
                                <Lucide icon="BookmarkPlus" className="w-4 h-4 mr-2" /> New Programme
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
            {/* BEGIN: Courses Table Layout */}
            <div className="p-5 mt-5 intro-y box">
                <div className="overflow-x-auto">
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
                    <Table striped>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th className="whitespace-nowrap">#</Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Name
                                </Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Description
                                </Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Programme
                                </Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Actions
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {courses?.map((course: any, index: number) => (
                                <Table.Tr key={course?.name + "#" + index}>
                                    <Table.Td>{index + 1}</Table.Td>
                                    <Table.Td>{course?.name}</Table.Td>
                                    <Table.Td> {course?.description}  </Table.Td>
                                    <Table.Td>{course?.programme.name}</Table.Td>
                                    <Table.Td>
                                        <div className="flex items-center">
                                            <button className="flex items-center m">
                                                <Lucide icon="FileEdit" className="w-4 h-4 mr-2" /> Edit
                                            </button>
                                            <button className="flex items-center ml-3 text-danger">
                                                <Lucide icon="Trash2" className="w-4 h-4 mr-2" /> Delete
                                            </button>
                                        </div>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </div>
            </div>
            {/* END: Courses Table Layout */}
        </div>
    )
}

export default index