import React, { useState } from "react";
import { tasks } from "../../utils/consts";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TaskColumn } from "./";
import { AppBar, Grid, Tabs, Tab, Typography } from "@material-ui/core";

interface ColumnListProps {
    tasks: typeof tasks;
}
// Converted to a pure component to prevent unnecessary re-drawing
class ColumnList extends React.PureComponent<ColumnListProps> {
    render() {
        const { tasks } = this.props;
        return Object.entries(tasks.columns).map(([id, column]) => (
            <Grid item xs={6} sm={4} md={3} key={`col${id}`}>
                <TaskColumn
                    title={column.title}
                    id={column.id}
                    tasks={column.tasks}
                />
            </Grid>
        ));
    }
}

const Home = () => {
    const handleDragEnd = (result: DropResult) => {
        const destination = result.destination?.droppableId;
        const source = result.source.droppableId;
        if (!destination) {
            return;
        }

        const newSourceTasks = Array.from(currTasks.columns[source].tasks);
        const newDestTasks = Array.from(currTasks.columns[destination].tasks);
        const task = newSourceTasks.find(
            (task) => task.id.toString() === result.draggableId
        );

        newSourceTasks.splice(result.source.index, 1);

        if (source !== destination) {
            newDestTasks.splice(result.destination!.index, 0, task!);
            const newDesCol = {
                ...currTasks.columns[destination],
                tasks: newDestTasks,
            };
            const newSourceCol = {
                ...currTasks.columns[source],
                tasks: newSourceTasks,
            };

            setTasks({
                ...currTasks,
                columns: {
                    ...currTasks.columns,
                    [destination]: newDesCol,
                    [source]: newSourceCol,
                },
            });
            return;
        }

        newSourceTasks.splice(result.destination!.index, 0, task!);
        const newSourceCol = {
            ...currTasks.columns[source],
            tasks: newSourceTasks,
        };

        console.log(currTasks);
        setTasks({
            ...currTasks,
            columns: {
                ...currTasks.columns,
                [source]: newSourceCol,
            },
        });
    };

    const handleTabs = (event: React.ChangeEvent<{}>, newValue: string) => {
        setTab(newValue);
    };

    const [currTasks, setTasks] = useState(tasks);
    const [tab, setTab] = useState("main");

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <AppBar position="relative" elevation={0}>
                <Tabs
                    onChange={handleTabs}
                    value={tab}
                    aria-label="tab selector"
                >
                    <Tab value="main" label="Tab One" />
                    <Tab value="other" label="Tab Two" />
                    <Tab value="third" label="Tab Three" />
                </Tabs>
            </AppBar>
            <Grid
                container
                spacing={3}
                justify="center"
                style={{ padding: "5px" }}
            >
                {tab === "main" && <ColumnList tasks={currTasks} />}
                {tab === "other" && (
                    <Typography variant="h6">Second Page</Typography>
                )}
                {tab === "third" && (
                    <Typography variant="h6">Third Page</Typography>
                )}
            </Grid>
        </DragDropContext>
    );
};

export default Home;
