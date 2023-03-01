import React, { FC } from "react"
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { GridContainer } from "../components/GridContainer";
import { Footer } from "../components/Footer";

export const IndexView : FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <div className="max-w-7xl mx-auto pb-12">
                <Section className="pt-4"/>
                <GridContainer />
            </div>
            <div className="bg-gray-800">
                <Footer />
            </div>
        </>
    );
}