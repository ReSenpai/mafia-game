// === material-ui ===
import { Box, Link } from '@material-ui/core';

// === components ===
import { Layout } from 'src/components';

const ContactsPage = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Box fontSize="h4.fontSize">Contacts</Box>

        <Link href="https://github.com/ReSenpai/mafia-game">GitHub</Link>
      </Box>
    </Layout>
  );
};

export default ContactsPage;
