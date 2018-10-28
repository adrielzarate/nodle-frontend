import React from 'react';

import {
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import CustomButton from '../components/CustomButton';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';

const GenerateReport = () => (
    <Layout>
        <Col xl="6" className="pt-5 scroll-y">

            <h3 className="mb-4">Generar reporte</h3>

            <CustomCard>
                <Form>

                    <FormGroup check inline className="mb-3">
                        <Label check for="subjectInfo">
                            <Input type="checkbox" name="subjectInfo" id="subjectInfo" /> Incluir información de la materia
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="teacherAssistantInfo">
                            <Input type="checkbox" name="teacherAssistantInfo" id="teacherAssistantInfo" /> Incluir información del profesor y colaboradores
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="allUnitsInfo">
                            <Input type="checkbox" name="allUnitsInfo" id="allUnitsInfo" /> Incluir información de todas las unidades
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="allUnitsExercisesInfo">
                            <Input type="checkbox" name="allUnitsExercisesInfo" id="allUnitsExercisesInfo" /> Incluir información de todas las unidades y sus ejercicios
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="totalAveragePerUnit">
                            <Input type="checkbox" name="totalAveragePerUnit" id="totalAveragePerUnit" /> Incluir promedio total de todos los estudiantes por unidad
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="totalAverageExercise">
                            <Input type="checkbox" name="totalAverageExercise" id="totalAverageExercise" /> Incluir promedio total de todos los estudiantes por ejercicio
                        </Label>
                    </FormGroup>

                    <p class="mt-3"><strong>Información sobre cada alumno</strong></p>

                    <FormGroup className="mb-3">
                        <Label for="StudentName">Listado de alumnos</Label>
                        <Input type="select" name="StudentName" id="StudentName" multiple>
                            <option>Nombre Apellido Alumno 1</option>
                            <option>Nombre Apellido Alumno 2</option>
                            <option>Nombre Apellido Alumno 3</option>
                            <option>Nombre Apellido Alumno 4</option>
                            <option>Nombre Apellido Alumno 5</option>
                        </Input>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="studentTotalAverage">
                            <Input type="checkbox" name="studentTotalAverage" id="studentTotalAverage" /> Incluir promedio total del alumno
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="studentTotalAveragePerUnit">
                            <Input type="checkbox" name="studentTotalAveragePerUnit" id="studentTotalAveragePerUnit" /> Incluir promedio por unidad del alumno
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="allStudentScoresPerExercise">
                            <Input type="checkbox" name="allStudentScoresPerExercise" id="allStudentScoresPerExercise" /> Incluir nota de cada ejercicio del alumno
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="studentApprovedExercises">
                            <Input type="checkbox" name="studentApprovedExercises" id="studentApprovedExercises" /> Incluir tabla de ejercicios aprobados por el alumno
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="studentDisapprovedExercises">
                            <Input type="checkbox" name="studentDisapprovedExercises" id="studentDisapprovedExercises" /> Incluir tabla de ejercicios desaprobados por el alumno
                        </Label>
                    </FormGroup>

                    <FormGroup check inline className="mb-3">
                        <Label check for="studentOwedExercises">
                            <Input type="checkbox" name="studentOwedExercises" id="studentOwedExercises" /> Incluir tabla de ejercicios adeudados por el alumno
                        </Label>
                    </FormGroup>

                    <CustomButton color="primary" className="mt-3">Generar reporte</CustomButton>

                </Form>
            </CustomCard>
        </Col>

    </Layout>
);

export default GenerateReport;