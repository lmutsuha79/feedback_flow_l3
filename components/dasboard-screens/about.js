import DashboardLayout from "../layout/dashboard-layout";

const About = () => {
  const { currentApp } = useContext(DashboardContext);

  return (
    <DashboardLayout>
      {currentApp && (
        <>
          {console.log(JSON.parse(currentApp.info))}
          <h2 className="mb-8 text-xl font-medium text-main_dark">
            Information About the App:{" "}
          </h2>
          <min>
            <Table striped={true}>
              <Table.Head>
                <Table.HeadCell>key</Table.HeadCell>
                <Table.HeadCell>value</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {Object.entries(JSON.parse(currentApp.info)).map(
                  ([key, value], index) => (
                    <Table.Row
                      key={index}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-main_dark capitalize dark:text-white">
                        {key}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-main_text dark:text-white">
                        {value.toString()}
                      </Table.Cell>
                    </Table.Row>
                  )
                )}
              </Table.Body>
            </Table>
          </min>
        </>
      )}
    </DashboardLayout>
  );
};

export default About;
