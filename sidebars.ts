import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'book-overview',
    {
      type: 'category',
      label: 'Section 1: Foundations',
      items: [
        '01-grocery-supply-chain-basics',
        '02-master-data-and-product-flow',
        '03-roles-and-responsibilities',
      ],
    },
    {
      type: 'category',
      label: 'Section 2: Planning and Procurement',
      items: [
        '04-demand-forecasting-and-planning',
        '05-procurement-and-supplier-management',
      ],
    },
    {
      type: 'category',
      label: 'Section 3: Operations',
      items: [
        '06-inbound-logistics-and-warehouse',
        '07-replenishment-store-operations-and-fulfillment',
      ],
    },
    {
      type: 'category',
      label: 'Section 4: Systems and QE Mapping',
      items: [
        '08-core-systems-and-integrations',
        '09-quality-engineering-test-scenarios',
        '10-end-to-end-lifecycle-walkthrough',
      ],
    },
    '11-glossary-and-next-steps',
  ],
};

export default sidebars;
