import { Menu } from "../../../base-components/Headless";
import Button from "../../../base-components/Button";
import Table from "../../../base-components/Table";
import Lucide from "../../../base-components/Lucide";

const index = () => {
    return (
        <div>
            <div className="flex items-center mt-8 intro-y">
                <h2 className="mr-auto text-lg font-medium">Programmes</h2>
                <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
                    <Button variant="primary" className="mr-2 shadow-md">
                        Add A Programme
                    </Button>
                    <Menu className="ml-auto sm:ml-0">
                        <Menu.Button as={Button} className="px-2 font-normal !box">
                            <span className="flex items-center justify-center w-5 h-5">
                                <Lucide icon="Plus" className="w-4 h-4" />
                            </span>
                        </Menu.Button>
                        <Menu.Items className="w-40">
                            <Menu.Item>
                                <Lucide icon="BookOpen" className="w-4 h-4 mr-2" /> New Course
                            </Menu.Item>
                            <Menu.Item>
                                <Lucide icon="BookmarkPlus" className="w-4 h-4 mr-2" /> New Class
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
            {/* BEGIN: Programme Table Layout */}
            <div className="p-5 mt-5 intro-y box">
                <div className="overflow-x-auto">
                    <Table striped>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th className="whitespace-nowrap">#</Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Name
                                </Table.Th>
                                <Table.Th className="whitespace-nowrap">
                                    Level
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            <Table.Tr>
                                <Table.Td>1</Table.Td>
                                <Table.Td>Art</Table.Td>
                                <Table.Td>ELEMENT</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>2</Table.Td>
                                <Table.Td>Hist</Table.Td>
                                <Table.Td>HIGH</Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                                <Table.Td>3</Table.Td>
                                <Table.Td>Lit</Table.Td>
                                <Table.Td>ELEMENT</Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>
                </div>
            </div>
            {/* END: Programme Table Layout */}
        </div>
    )
}

export default index