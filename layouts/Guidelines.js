const Guidelines = () => {
    return (
        <section className="py-10 px-4 container" id="submission-guidelines">
            <h1 className="text-left">
                Submission Guidelines
            </h1>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 shadow-lg rounded-lg">


                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Format and Length</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>All submissions must be in English</li>
                        <li>Use the symposium template (available on the website)</li>
                        <li>Submissions must be original and not published elsewhere</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Review Process</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>All papers will undergo rigorous peer review</li>
                        <li>Each submission will be reviewed by at least three PC members</li>
                        <li>Review criteria include novelty, technical quality, significance, and clarity</li>
                        <li>Accepted papers will be published in the symposium proceedings</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Guidelines;
