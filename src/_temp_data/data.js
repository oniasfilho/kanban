const generateRandomId = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let id = '';
  for (let i = 0; i < 10; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};

const GENERAL_DATA = {
  boards: [
    {
      id: generateRandomId(),
      name: 'Platform Launch',
      columns: [
        {
          id: generateRandomId(),
          name: 'Todo',
          tasks: [
            {
              id: generateRandomId(),
              position: 0,
              title: 'Build UI for onboarding flow',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 1,
              title: 'Build UI for search',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 2,
              title: 'Build settings UI',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Account page',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Billing page',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 3,
              title: 'QA and test all major user journeys',
              description: 'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
              status: 'Todo',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Internal testing',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'External testing',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: generateRandomId(),
          name: 'Doing',
          tasks: [
            {
              id: generateRandomId(),
              position: 0,
              title: 'Design settings and search pages',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Settings - Account page',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Settings - Billing page',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 1,
              title: 'Add account management endpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Upgrade plan',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Cancel plan',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Update payment method',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 2,
              title: 'Design onboarding flow',
              description: '',
              status: 'Doing',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: generateRandomId(),
          name: 'Done',
          tasks: [
            {
              id: generateRandomId(),
              position: 0,
              title: 'Conduct 5 wireframe tests',
              description: 'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Complete 5 wireframe prototype tests',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 1,
              title: 'Create wireframe prototype',
              description: 'Create a greyscale clickable wireframe prototype to test our assumptions so far.',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Create clickable wireframe prototype in Balsamiq',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 2,
              title: 'Review results of usability tests and iterate',
              description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Meet to review notes from previous tests and plan changes',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Make changes to paper prototypes',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Conduct 5 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 3,
              title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Create paper prototypes for version one',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Complete 10 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 4,
              title: 'Market discovery',
              description: 'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Interview 10 prospective customers',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 5,
              title: 'Competitor analysis',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Find direct and indirect competitors',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'SWOT analysis for each competitor',
                  isCompleted: true,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 6,
              title: 'Research the market',
              description: 'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
              status: 'Done',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Write up research analysis',
                  isCompleted: true,
                },
                {
                  id: generateRandomId(),
                  title: 'Calculate TAM',
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: generateRandomId(),
      name: 'Marketing Plan',
      columns: [
        {
          id: generateRandomId(),
          name: 'Todo',
          tasks: [
            {
              id: generateRandomId(),
              position: 0,
              title: 'Plan Product Hunt launch',
              description: '',
              status: 'Todo',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Find hunter',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Gather assets',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Draft product page',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Notify customers',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Notify network',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Launch!',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 1,
              title: 'Share on Show HN',
              description: '',
              status: '',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Draft out HN post',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Get feedback and refine',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Publish post',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 2,
              title: 'Write launch article to publish on multiple channels',
              description: '',
              status: '',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Write article',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Publish on LinkedIn',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Publish on Indie Hackers',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Publish on Medium',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: generateRandomId(),
          name: 'Doing',
          tasks: [],
        },
        {
          id: generateRandomId(),
          name: 'Done',
          tasks: [],
        },
      ],
    },
    {
      id: generateRandomId(),
      name: 'Roadmap',
      columns: [
        {
          id: generateRandomId(),
          name: 'Now',
          tasks: [
            {
              id: generateRandomId(),
              position: 0,
              title: 'Launch version one',
              description: '',
              status: '',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Launch privately to our waitlist',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Launch publicly on PH, HN, etc.',
                  isCompleted: false,
                },
              ],
            },
            {
              id: generateRandomId(),
              position: 1,
              title: 'Review early feedback and plan next steps for roadmap',
              description: "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: '',
              subtasks: [
                {
                  id: generateRandomId(),
                  title: 'Interview 10 customers',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Review common customer pain points and suggestions',
                  isCompleted: false,
                },
                {
                  id: generateRandomId(),
                  title: 'Outline next steps for our roadmap',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: generateRandomId(),
          name: 'Next',
          tasks: [],
        },
        {
          id: generateRandomId(),
          name: 'Later',
          tasks: [],
        },
      ],
    },
  ],
};

export default GENERAL_DATA;
