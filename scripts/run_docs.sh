npm run build --ws \
    && concurrently \
    'npm run dev --w @heliconhq/rjsf' \
    'npm run dev --w @heliconhq/core' \
    'npm run dev --w @heliconhq/select' \
    'npm run dev --w @heliconhq/highlight' \
    'npm run dev --w @heliconhq/charts' \
    'npm run dev --w @heliconhq/dates' \
    'npm run dev --w @heliconhq/maps' \
    'npm run dev --w @heliconhq/editor' \
    'npm run docs:start'
