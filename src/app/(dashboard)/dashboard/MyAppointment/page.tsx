export default function MyAppointment() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">My Appointment</h2>
                <p className="rounded-lg border border-black p-3">MAY 10, 2022</p>
            </div>
            <div className="mt-5 w-full overflow-x-auto rounded-xl">
                <table className="w-full overflow-hidden rounded-xl bg-[#FFFFFF]">
                    <thead>
                        <tr className="bg-[#E6E6E6] text-left text-sm uppercase *:min-w-8 *:px-4 *:py-2 *:lg:py-3">
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(Array(5).keys()).map((_, idx) => (
                            <tr key={idx} className="text-nowrap text-left text-xs *:px-4 *:py-4 lg:text-sm">
                                <td className="text-center">{idx + 1}</td>
                                <td>John Doe</td>
                                <td>Teeth Orthodontics</td>
                                <td>08.30 AM - 09.00 AM</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
