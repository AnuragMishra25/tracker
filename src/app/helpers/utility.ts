export const Utility = {
    convertPagedDataToDisplay: (data) => {
        const result = data.map(x => {
            if (x.sourceLevel != null) {
                if (x.sourceLevel > 5) {
                    x.sourceLevel = "Old Source";
                } else if (x.sourceLevel == 5) {
                    x.sourceLevel = "Fifth Source";
                } else if (x.sourceLevel == 4) {
                    x.sourceLevel = "Fourth Source";
                } else if (x.sourceLevel == 3) {
                    x.sourceLevel = "Third Source";
                } else if (x.sourceLevel == 2) {
                    x.sourceLevel = "Second Source";
                } else if (x.sourceLevel == 1) {
                    x.sourceLevel = "First Source";
                }
            }
            return x;
        });
        return result;
    }
}