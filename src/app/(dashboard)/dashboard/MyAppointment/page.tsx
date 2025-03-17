export default function MyAppointment() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl">My Appointment</h2>
                <p className="rounded-lg border border-black p-3">MAY 10, 2022</p>
            </div>
            <table className="mt-5 w-full rounded-xl bg-[#FFFFFF] text-left">
                <thead className="rounded-xl">
                    <tr className="bg-[#E6E6E6] text-sm *:min-w-8 *:py-3">
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="*:py-4">
                        <td className="pl-6">1</td>
                        <td>John Doe</td>
                        <td>Teeth Orthodontics</td>
                        <td> 08.30 AM - 09.00 AM</td>
                    </tr>
                    <tr className="*:py-4">
                        <td className="pl-6">2</td>
                        <td>John Doe</td>
                        <td>Teeth Orthodontics</td>
                        <td> 08.30 AM - 09.00 AM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
