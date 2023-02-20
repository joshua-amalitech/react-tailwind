import React, { FC } from "react"
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { GridContainer } from "../components/GridContainer";

export const IndexView : FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <div className="max-w-5xl mx-auto">
                <Section className="pt-4"/>
                <GridContainer />
            </div>
        </>
    );
}