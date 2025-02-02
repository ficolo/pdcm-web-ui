import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FacetSidebar } from "./FacetSidebar";
import "./FacetSidebar.scss";
import { IFacetSidebarProps } from "../../../models/Facet.model";

export default {
  title: "Components/Search/Facet sidebar",
  component: FacetSidebar,
  argTypes: { onSearchChange: { action: "change" } },
} as Meta;

const Template: Story<IFacetSidebarProps> = (args) => (
  <div style={{ width: "20%", backgroundColor: "#fff" }} className="h-100">
    <FacetSidebar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  facetSections: [
    {
      key: "model",
      name: "PDCM Model",
      facets: [
        {
          key: "model",
          name: "Data available",
          options: [
            {
              key: "gene_mutation",
              name: "Gene Mutation",
            },
            {
              key: "cytogenetics",
              name: "Cytogenetics",
            },
            {
              key: "copy_number_alteration",
              name: "Copy Number Alteration",
            },
            {
              key: "dosing_studies",
              name: "Dosing Studies",
            },
            {
              key: "patient_treatment",
              name: "Patient Treatment",
            },
            {
              key: "expression",
              name: "Expression",
            },
          ],
          type: "check",
        },
      ],
    },
    {
      key: "molecular_data",
      name: "Molecular Data",
      facets: [
        {
          key: "molecular_data",
          name: "Copy number alteration",
          options: [],
          type: "autocomplete",
        },
      ],
    },
  ],
};
