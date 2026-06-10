import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    operationsSidebar: [
        {
            type: 'doc',
            id: 'operations-home',
            label: 'Core Overview',
        },
        {
            type: 'category',
            label: 'Phase 1: Environment Provisioning',
            collapsed: false,
            items: [
                'github-setup',
            ],
        },
        {
            type: 'category',
            label: 'Phase 2: Automation Runtime',
            collapsed: false,
            items: [
                'workflow-setup',
            ],
        },
    ],
};

export default sidebars;