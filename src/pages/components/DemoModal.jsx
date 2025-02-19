import React from "react";
import {
    Dialog,
    DialogActions,
    Button,
} from "@mui/material";

import {useLDClient, withLDConsumer} from "launchdarkly-react-client-sdk";
import ModalVariantA from "./ModalVarientA";
import ModalVariantB from "./ModalVarientB";

const DemoModal = ({ open, setModalOpen, flags }) => {

    const ldClient = useLDClient();
    const variant = flags.demoModalVarient
    console.log('DemoModal.flags.demoModalVariant', flags.demoModalVarient)
    const handleHelpful = () => {
        // Optionally track the event:
        ldClient.track("demoModalFeedback", { variant: variant, feedback: "helpful" });
        setModalOpen(false);
    };

    const handleNotHelpful = () => {
        // Optionally track the event:
        ldClient.track("demoModalFeedback", { variant: variant, feedback: "notHelpful" });
        setModalOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleNotHelpful} maxWidth="sm" fullWidth>
            {variant === "B" ? <ModalVariantB /> : <ModalVariantA />}
            <DialogActions>
                <Button onClick={handleHelpful} variant="contained" color="primary">
                    This is helpful
                </Button>
                <Button onClick={handleNotHelpful} variant="outlined" color="secondary">
                    Not helpful
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default withLDConsumer()(DemoModal);
